const evaluate = (array, predicate) => array.reduce(
  (acc, item, i) => (
    predicate(item)
      ? { t: [...acc.t, i], f: acc.f }
      : { t: acc.t, f: [...acc.f, i] }
  ), { t: [], f: [] },
);

const plugin = (chai) => {
  chai.Assertion.addMethod('containAll', function func(predicate) {
    const array = this._obj; // eslint-disable-line no-underscore-dangle
    const { f } = evaluate(array, predicate);
    this.assert(
      f.length === 0,
      `expected array to contain all items to be true, but items at indexes [${f}] are false`,
      'expected array not to contain all items to be true, but all items are true',
    );
  });

  chai.Assertion.addMethod('containOne', function func(predicate) {
    const array = this._obj; // eslint-disable-line no-underscore-dangle
    const { t } = evaluate(array, predicate);
    this.assert(
      t.length >= 1,
      'expected array to contain at least one item to be true, but all items are false',
      `expected array not to contain at least one item to be true, but items at indexes [${t}] are true`,
    );
  });

  chai.Assertion.addMethod('containExactlyOne', function func(predicate) {
    const array = this._obj; // eslint-disable-line no-underscore-dangle
    const { t } = evaluate(array, predicate);
    this.assert(
      t.length === 1,
      `expected array to exactly contain one item to be true, but items at indexes [${t}] are true`,
      `expected array not to exactly contain one item to be true, but item at index [${t}] is true`,
    );
  });
};

module.exports = plugin;
