/*
This is written by Prashant
Overview of JavaScript from
https://www.codecademy.com/courses/learn-javascript
*/

//Declaring variable
var myString = 'Prashant';
var myNumber = 7
var myBoolean = true

console.log('My name is ' + myString , 'and I like eating ' + myNumber + ' times. It\'s ' + myBoolean + '\.')
console.log('My name is' ,myString , 'and I like eating', myNumber, 'times. It\'s', myBoolean ,'\.')
// observe the difference between '+' and ',' in console. ',' handles the white space automatically before and after the word.


console.log(365/27) // division
console.log(365%27) // modulus

// Math.random - generating random numbers
var myRandomNumber = Math.random()
console.log(myRandomNumber * 100)
console.log(Math.floor(myRandomNumber * 100))
