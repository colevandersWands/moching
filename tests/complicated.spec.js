const { equal } = require("assert");
const index = require('../lib');

describe('Programmatic usage suite', function () {
  describe('#index', function () {
    it('should fail', function () {
      equal(index(), "programmaticexample");
    });
  });
});
