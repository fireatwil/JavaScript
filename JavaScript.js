/*
This document is written by Prashant

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

/*
LINKING JAVASCRIPT to HTML and CSS

Summary:
How to link a JavaScript file to an HTML file using a <script> tag.
jQuery is a library to help JavaScript interact with HTML elements.
We can make sure our page is ready to go with $(document).ready(). Then, we can pass in a function to ready that will execute when the page is loaded.
jQuery uses the same selector names as CSS.
We can hide elements with hide, and show them with show.
We can make elements appear with fadeIn.
on('click') functions allow us to make HTML elements clickable. When an element is clicked, the click function will execute the function we provide. It's full sytnax looks like:
$('.example-class').on('click', function() {
  // Execute when .example-class is clicked
});
toggle will toggle an element on and off the page.
$(this) will select the specific element that was clicked if placed inside a click function.
toggleClass can toggle a class on and off.
We can select elements next to each other with next.
text will replace a DOM element's text with text we specify.
slideToggle will make an element slide into and out of the page with an animation.


// Practice

// link javaScript to index.html
<script src='/JavaScript.js'></script>

DOM - Document Object Model
  term for an elements in an HTML file

// select HTML elements
var skillset = document.getElementsByClassName('skillset');
alert(skillset)

JQUERY
<script src='https://code.jquery.com/jquery-3.1.0.js'></script>
function main() {   // main function in JavaScript.js file which is linked to HTML
var $skillset = $('.skillset');
alert($skillset);

// to hide the elements
$('.skillset').hide(); //The hide function will add the CSS property display: none to the DOM element from the page, which will hide it.

// fadeIn
$('.skillset').fadeIn(1000); // We must start with an element that is not currently displayed on the page.

// show
$('.skillset').show(); //show will change the CSS attribute display: none to a visible display property, therefore showing the element.

// on click
// .on('click', function() { ... }) adds a click listener to the selector.
// When it's clicked the function will execute the code within its block.
$('.projects').hide();
$('.projects-button').on('click', function(){ //
  $('.projects').show();
})

// toggle - When toggle is executed, it will hide or show the element that the selector points to.
// If the element is currently hidden, toggle will show the element, and vice versa.
$('.projects-button').on('click', function() {
    $('.projects').toggle();
})

// toggleClass('active')
// .toggleClass is a function that will toggle a CSS class on the jQuery selector it's connected to.
// If the element has the class applied to it, toggleClass will remove it, and if the element does not have the class, it will add it.
// 'active' is the class that we will toggle on and off. Notice that toggleClass does not require us to include the period before 'active' since it's already expecting a CSS class.
$('.projects-button').on('click', function() {
  $('.projects-button').toggleClass('active');
})


// this
// $(this) selects the clicked element. If there are multiple elements with a class of .example-class, this will only toggle the class of the one that is clicked on.
// Notice that $(this) does not require quotes around it, since it is not a CSS class. Instead, this is a JavaScript keyword.
// $(this) behaves just like our other selectors. We can attach toggleClass or toggle to it in the same way.
$('.projects-button').on('click', function() {
    $(this).toggleClass('active');
})


// next()
// next() can help us select elements that are next to another element.
$('.projects-button').on('click', function() {
    $(this).next().hide();
})

// text('some text inside ')
// Inside of text's parentheses, we can provide text that will become the text of our DOM element.
// The text we supply will replace any existing text, and if the element has no pre-existing text, text will add it.
$('.projects-button').on('click', function() {
    $(this).text('Projects Viewed');
})

// slideToggle(1000) // 1000 in ms
// slideToggle also takes a parameter of milliseconds that the animation should last. The default is 400 milliseconds, or 0.4 seconds.
$('.projects-button').on('click', function() {
  $(this).next().slideToggle(400);
});

}
$(document).ready(main);

main here is a callback, which means that our code will wait until the document
(in other word, the DOM) is loaded, or ready.
When it is, then it will execute the main function.

For all above examples, refer the below sample code

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
		$(this).next().toggle();
  //  $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
}

$(document).ready(main);

*/
