let app = require('../src/js/script.js');

describe("app", function () {
  it("pow()", function () {
    let result;
    let a = 2;
    let b = 2;
    result = app.pow(a,b);
    expect(result).toEqual(4);
  })
});