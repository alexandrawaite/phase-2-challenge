var expect = require('chai').expect;
var assert = require('chai').assert;
var weekday = require('../functions.js');
var snippet = require('../functions.js');

describe('weekday', function () {
  it('should return the day of the week', function() {
    expect(weekday(new Date(2017, 5, 15))).to.eql("Thu");
    expect(weekday(new Date(2016, 5, 15))).to.not.eql("Thu");
  });
});

describe('snippet', function () {
  it('should shorten a string to the maxlength and add the ellipsis to the end', function() {
    expect(snippet("Hello world", 5)).to.eql("Hello...");
  });
    expect(snippet("Thanks", 10)).to.eql("Thanks");
});
