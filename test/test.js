import {romanToArabic} from '../script.js';
import {assert} from 'chai';

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

});
