/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a different value.
var FILL_ME_IN = 'Fill this value in';
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num) {
      return num / 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
      return num / 2 === 0;
    };

    if (even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
      //throw new Error('Delete me!');
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  //var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011551234567890123')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511345678901234')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511551234567890123')).to.equal('Discover');
  });



  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6440345678901234')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6450345678901234')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6460345678901234')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6470345678901234')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6480345678901234')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6490345678901234')).to.equal('Discover');
  });



  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6440551234567890123')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6450551234567890123')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6460551234567890123')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6470551234567890123')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6480551234567890123')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6490551234567890123')).to.equal('Discover');
  });



});


//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  //prefix of 5018
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501834567890')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018345678901')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50183456789010')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501834567890100')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018345678901000')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50183456789010000')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501834567890100000')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018345678901000000')).to.equal('Maestro');
  });

  //prefix of 5020 and lengths of 12-19
  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502034567890')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020345678901')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50203456789010')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502034567890100')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020345678901000')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50203456789010000')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502034567890100000')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020345678901000000')).to.equal('Maestro');
  });


  //prefix of 5038 and lengths of 12-19
  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503834567890')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038345678901')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50383456789010')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503834567890100')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038345678901000')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50383456789010000')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503834567890100000')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038345678901000000')).to.equal('Maestro');
  });


  //prefix of 6304 and lengths of 12-19
  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630434567890')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304345678901')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63043456789010')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630434567890100')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304345678901000')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63043456789010000')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630434567890100000')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304345678901000000')).to.equal('Maestro');
  });

});



//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182,
//633110, 6333, or 6759 and a length of 16, 18, or 19.
//Heads up! Switch and Visa seem to have some overlapping card numbers
//in any apparent conflict, you should choose the network with the longer prefix.
describe('Switch', function() {
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903001234567890')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905001234567890')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911001234567890')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936001234567890')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641821234567890')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331101234567890')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333001234567890')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759001234567890')).to.equal('Switch');
  });


  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490300123456789000')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490500123456789000')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491100123456789000')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493600123456789000')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182123456789000')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110123456789000')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633300123456789000')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675900123456789000')).to.equal('Switch');
  });


  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903001234567890000')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905001234567890000')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911001234567890000')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936001234567890000')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641821234567890000')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331101234567890000')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333001234567890000')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759001234567890000')).to.equal('Switch');
  });

});




//China UnionPay always has a prefix of 624-626, 6282-6288, or 622126-622925 and a length of 16-19.
describe('China UnionPay', function() {
  var expect = chai.expect;


  for (var prefix = 622126; prefix < 622926; prefix++) {
    (function (prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '3456789012')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix.toString() + '34567890123')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix.toString() + '345678901234')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '3456789012345')).to.equal('China UnionPay');
      });
    })(prefix);
  }

  for (var prefix1 = 624; prefix1 < 627; prefix1++) {
    (function(prefix1) {
      it('has a prefix of ' + prefix1 + ' and a length of 16', function() {
        expect(detectNetwork(prefix1.toString() + '3456789012345')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix1 + ' and a length of 17', function() {
        expect(detectNetwork(prefix1.toString() + '34567890123456')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix1 + ' and a length of 18', function() {
        expect(detectNetwork(prefix1.toString() + '345678901234567')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix1 + ' and a length of 19', function() {
        expect(detectNetwork(prefix1.toString() + '3456789012345678')).to.equal('China UnionPay');
      });
    })(prefix1);
  }

  for (var prefix2 = 6282; prefix2 < 6289; prefix2++) {
    (function(prefix2) {
      it('has a prefix of ' + prefix2 + ' and a length of 16', function() {
        expect(detectNetwork(prefix2.toString() + '345678901234')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix2 + ' and a length of 17', function() {
        expect(detectNetwork(prefix2.toString() + '3456789012345')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix2 + ' and a length of 18', function() {
        expect(detectNetwork(prefix2.toString() + '34567890123456')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix2 + ' and a length of 19', function() {
        expect(detectNetwork(prefix2.toString() + '345678901234567')).to.equal('China UnionPay');
      });
    })(prefix2);
  }


});


















































