import { flatten, isEmpty } from "lodash";
import { SourceFile } from "ts-morph";
import { RuleMap } from "../constants/rule-map";
import { RuleName } from "../enums/rule-name";
import { RuleResult } from "../interfaces/rule-result";
import { Context } from "../models/context";
import { Logger } from "./logger";
import { printRuleResults } from "./print-rule-results";

const ruleRunner = async (files: SourceFile[]): Promise<RuleResult[]> => {
    const { rules: requestedRules } = Context.cliOptions;
    const invalidRuleNames =
        requestedRules?.filter(
            (rule) => !Object.values(RuleName).includes(rule)
        ) ?? [];
    if (!isEmpty(invalidRuleNames)) {
        Logger.error("Invalid rule name(s) specified:", invalidRuleNames);
        Logger.info("Valid rule names are:", Object.values(RuleName));
        process.exit(1);
    }

    const rules = requestedRules ?? Object.values(RuleName);

    const results = await Promise.all(
        flatten(
            rules.map((rule) => {
                const ruleFunction = RuleMap[rule];
                return files.map(ruleFunction);
            })
        )
    );

    printRuleResults(results);

    return results;
};

export { ruleRunner };
