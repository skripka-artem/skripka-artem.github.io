const app = require('../js/app.js');

describe("app", function() {
  it("sayHi", function() {
    //prepare
    let result;
    //act
    result=app.sayHi('Arti');
    expect(result).toBe("Hello, Arti");
  });

  it("sum", function() {
    //prepare
    let result;
    //act
    result=app.mySum(7,8);
    expect(result).toBe(15);
  });
});