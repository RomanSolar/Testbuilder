// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var firstTwoDigits = cardNumber[0] + cardNumber[1];
  var firstThreeDigits = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var firstFourDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var firstSixDigits = firstFourDigits + cardNumber[4] + cardNumber[5];

  //Diner's club:
  var diner = (firstTwoDigits === '38' || firstTwoDigits === '39') && cardNumber.length === 14;
  if (diner) {
    return 'Diner\'s Club';
  } 

  //American express:
  var ae = (firstTwoDigits === '34' || firstTwoDigits === '37') && cardNumber.length === 15;
  if (ae) {
    return 'American Express';
  } 

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 
  //and a length of 16, 18, or 19.
  //Heads up! Switch and Visa seem to have some overlapping card numbers 
  //- in any apparent conflict, you should choose the network with the longer prefix.
  var switchPref = firstFourDigits === '4903' || firstFourDigits === '4905' || 
  firstFourDigits === '4911' || firstFourDigits === '4936' || firstSixDigits === '564182' || 
  firstSixDigits === '633110' || firstFourDigits === '6333' || firstFourDigits === '6759';
  var switchLen = cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19;
  if (switchPref && switchLen) {
    return 'Switch';
  } 

  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  var visa = cardNumber[0] === '4' && (cardNumber.length === 13 
    || cardNumber.length === 16 || cardNumber.length === 19);
  if (visa) {
    return 'Visa';
  } 

  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  var mastercard = (firstTwoDigits === '51' || firstTwoDigits === '52' || firstTwoDigits === '53' 
    || firstTwoDigits === '54' || firstTwoDigits === '55') && cardNumber.length === 16;
  if (mastercard) {
    return 'MasterCard';
  } 

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  var between644and649 = firstThreeDigits >= 644 && firstThreeDigits <= 649;
  var discover = (firstFourDigits === '6011' || between644and649 || firstTwoDigits === '65')
  && (cardNumber.length === 16 || cardNumber.length === 19);
  if (discover) {
    return 'Discover';
  } 

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  var maestro = (firstFourDigits === '5018' || firstFourDigits === '5020' || 
    firstFourDigits === '5038' || firstFourDigits === '6304') && 
    (cardNumber.length >= 12 && cardNumber.length <= 19);
  if (maestro) {
    return 'Maestro';
  } 

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 
  //and a length of 16-19.
  var cupRange = (firstSixDigits >= 622126 && firstSixDigits <= 622925) || 
  (firstThreeDigits >= 624 && firstThreeDigits <= 626) || 
  (firstFourDigits >= 6282 && firstFourDigits <= 6288);
  if (cupRange && cardNumber.length >= 16 && cardNumber.length <= 19) {
    return 'China UnionPay';
  } 

};



















