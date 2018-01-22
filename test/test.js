import { romanToArabic } from '../script';
import { assert } from 'chai';
import { getCharMap } from '../utils';

describe("Roman numbers", function() {
  it("should return 1 for I", function() {
    assert.equal(romanToArabic('I'), 1);
  });

  it("should return 1234 MCCXXXIV", function() {
    assert.equal(romanToArabic('MCCXXXIV'), 1234);
  });

  it("should return 250 CDL", function() {
    assert.equal(romanToArabic('CDL'), 450);
  });

  it("should return 4 IV", function() {
    assert.equal(romanToArabic('IV'), 4);
  });

  it("should return 6 VI", function() {
    assert.equal(romanToArabic('VI'), 6);
  });


  it("should return 1984 MCMLXXXIV", function() {
    assert.equal(romanToArabic('MCMLXXXIV'), 1984);
  });

});

describe("getCharMap", function() {
  it("should return 1 for I", function() {
    assert.equal(getCharMap('I'), 1);
  });

  it("should return 5 for V", function() {
    assert.equal(getCharMap('V'), 5);
  });

  it("should return 10 for X", function() {
    assert.equal(getCharMap('X'), 10);
  });

  it("should return 50 for L", function() {
    assert.equal(getCharMap('L'), 50);
  });

  it("should return 100 for C", function() {
    assert.equal(getCharMap('C'), 100);
  });

  it("should return 500 for D", function() {
    assert.equal(getCharMap('D'), 500);
  });

  it("should return 1000 for M", function() {
    assert.equal(getCharMap('M'), 1000);
  });
});
