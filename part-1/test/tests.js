var expect = require('chai').expect;
var weekday = require('../functions.js');

describe('weekday', function () {
  it('should return the day of the week', function() {
    let date = new Date(2017, 5, 19);
    expect(new Date(2017, 5, 15)).to.eql("Thu");
  });
  it('giving a non-date parameter should return false', function() {
    expect("hi").to.be.false;
  });
});
