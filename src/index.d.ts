/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
      containAll<T = any>(predicate: Predicate<T>): Assertion;
      containOne<T = any>(predicate: Predicate<T>): Assertion;
      containExactlyOne<T = any>(predicate: Predicate<T>): Assertion;
    }

    interface Assert {
      containAll<T = any>(val: T[], predicate: Predicate<T>, msg?: string): void;
      containOne<T = any>(val: T[], predicate: Predicate<T>, msg?: string): void;
      containExactlyOne<T = any>(val: T[], predicate: Predicate<T>, msg?: string): void;
    }
  }
}

type Predicate = <T>(item: T) => boolean;

declare const chaiQuantifiers: Chai.ChaiPlugin;
export = chaiQuantifiers;
