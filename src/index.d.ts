/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
      containAll(predicate: Predicate): Assertion;
      containOne(predicate: Predicate): Assertion;
      containExactlyOne(predicate: Predicate): Assertion;
    }

    interface Assert {
      containAll(val: any[], predicate: Predicate, msg?: string): void;
      containOne(val: any[], predicate: Predicate, msg?: string): void;
      containExactlyOne(val: any[], predicate: Predicate, msg?: string): void;
    }
  }
}

type Predicate = (item: any) => boolean;

declare const chaiQuantifiers: Chai.ChaiPlugin;
export = chaiQuantifiers;
