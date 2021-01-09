import chai, { expect } from "chai";
import chaiQuantifiers from "..";

chai.use(chaiQuantifiers);

describe('chai-quantifiers with typescript', () => {
  it('should work', () => {
    expect([1, 2, 3, 4]).to.containAll((item: any) => (item < 5));
    expect([1, 2, 3, 4]).to.containOne((item: any) => (item >= 3));
    expect([1, 2, 3, 4]).to.containExactlyOne((item: any) => (item === 2));
  });
});
