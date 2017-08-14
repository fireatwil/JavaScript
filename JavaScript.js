/*
This document is written by Prashant
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

// if else statement
/*
if/else statements make binary decisions and execute separate code based on a condition.
We can add extra conditions with to if/else statements with else if conditions.
*/
var attitude = 10
if(attitude >= 5 ){
  console.log("U\'ll rise higher")
}else {
  console.log("damn stupid")
}

var moonPhase = "full"
if (moonPhase === 'full'){
  console.log("Howwll!!!");;
}else if (moonPhase !== 'full' && moonPhase === 'partial') { //equal to '===' , not equal to '!=='
  console.log("I may turn into warewolf...but not sure :\'P ");
}else {
  console.log("I am a Vampire!!! Hahahaaaa");
}


// switch statement
/*
switch statements make complicated if/else statements easier to read, however they achieve the same result as if/else statements.
*/
var moonPhase = "partial";
switch (moonPhase) {
  case "full":
    console.log("Howwwlll!!!");
    break;
  case "moon light":
    console.log("I am turning");
    break;
  default:
    console.log("Hahahaaaa, confused!!! I am a Vampire");
}

/*
Comparison operators, like <, >, <=, and >= can compare two variables. After they compare, they always return either true or false.
Logical Operators, like &&, ||, !==, and !, can compare two variables to see if a certain condition exists:
&& checks if both sides are true.
|| checks if either side is true.
!== checks if both sides are not equal.
! changes a variable that is true to false, and vice versa.
*/


// Functions
/*
Functions are written to perform a task.
Functions take data or variables, perform a set of tasks on them, and then return the result.
We can define parameters when calling the function.
When calling a function, we can pass in arguments, which will set the function's parameters.
We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.
*/

var pizzaCrustType = "thin crust";
var pizzaTopping = "bacon";
var orderCount = 0;
var perOrderCost = 7.5;
var serviceTax = 0.06;

function takeOrder(topping, crustType){
  orderCount += 1;
  return ("Order: " + crustType + " Pizza is ordered with " + topping + ".");
}
function getSubTotal(itemCount, perOrderCost){
  return (itemCount * perOrderCost);
}
function getTotal(){
  return (getSubTotal(orderCount, perOrderCost) + getSubTotal(orderCount, perOrderCost) * serviceTax);
}

console.log(takeOrder(pizzaTopping, pizzaCrustType));
console.log("The subTotal is " + getSubTotal(orderCount, perOrderCost));
console.log("The total order cost is: " + getTotal());

//Scope - Global and Functional
/*
Scope refers to where in a program a variable can be accessed.
The idea is that some variables ar eunable to be accessed everywhere in a program.
Scope is the idea in programming that some variables are acessible/inaccessible from other parts of the program.

Global scope - If you write a variable outside of a function in JavaScript, it's in global scope and can be used by any other part or function of the program.
      Global Scope refers to variables that are accessible to every part of the program.
Functional scope - When we write variables inside a function, only that function has access to its own variable.
      Therefore they are in functional scope.
      In addition to a function having access to its own variables, it also has access to variables in the global scope.
      Functional Scope refers to variables created inside functions, which are not accessible outside of its block.
*/

// Arrays
/*
Arrays are lists and are a way to store data in JavaScript.
Each item inside of an array is at a numbered position. Arrays are created with brackets []
*/
var arr = ['One', 'Two', 'Three'];
var firstArr = arr[2];
console.log(firstArr);
console.log(firstArr.length);
console.log(arr.length);
console.log("Original array: " + arr);
// push method - push() allows us to add items to the end of the array.
arr.push('Four', 'Five');
console.log("After pushing: " + arr);

//pop method - pop() allows us to delete the last item of an array
arr.pop();
console.log("After popping: " + arr)

/*
for more methods, please visit
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// for loop - allows us to repeat a block of code for known amount of times
var visitingPlaces = ['Islands', 'Forests', 'Mountains']
var dreamPlaces = ['Islands','Mountains']

for (var i = 0; i < visitingPlaces.length; i++){
  for (var j = dreamPlaces.length-1; j >= 0 ; j--){
    if (visitingPlaces[i] === dreamPlaces[j]){
      console.log("Awesome: Let\'s go to " + visitingPlaces[i]);
    }
  }
}

// while loop - allows us to loop over a code for unknown amount of times.
var cards = ['Heart', 'Diamond', 'Spade', 'Club']
var currentCard = 'Club';
var expectedCard = 'Spade';

while (currentCard != expectedCard) {
  console.log("currentCard: " + currentCard);
  var randomNumber = Math.floor(Math.random()*4);
  console.log("Random number: " + randomNumber)
  currentCard = cards[randomNumber];
}
console.log("Finally, found " + currentCard);
