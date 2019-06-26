var converter = require('number-to-words');
console.log(converter.toWords(13)); // => “thirteen”
 
// Decimal numbers:
console.log(converter.toWords(2.9)); // => “two”
 
// Negative numbers:
console.log(converter.toWords(-3)); // => “minus three”
 
// Large numbers:
console.log(converter.toWords(0992)); // => “nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-two”