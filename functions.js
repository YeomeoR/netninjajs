// define the function once and call it outside of the scope, whenever you want the function to run.

// methods are just a function that do something.....

// write out the function keyword and name it. After the name we give it some parentheses and open a pair of curly braces. The code for the function goes inside this code block.

// function declaration. No semi-colon to end a function declaration
// function greet() {
//   console.log('hello there');
// }

// function expression is when you set a function to something like a variable. Function expressions always end with a semi-colon
// const speak = function () {
//   console.log('good day!');
// };

// in order for the function to run we need to call it...
// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// hoisting is calling a function before the function is declared. This does not work with function expressions (speak).
// function greet() {
//   console.log('hello there');
// }

// arguments and parameters
// pass in a value to do something with that value. Name the value ie. 'name'
// const speak = function (name) {
//   console.log(`good day ${name}!`);
// };
//to access the argument, we have to pass it into the call. When we call the function we have access to that value. However, we can't access that value outside of the function with a cl for example, as 'name' has been created as a local variable

//nothing will happen. undefined is returned to the console
// console.log(speak('mario'));

// speak('mario');

// we might want to pass a few different values to the function

// const speak = function (name, time) {
//   console.log(`good ${time} ${name}!`);
// };

// the order of the arguments must match the order of the parameters in the function when calling the function! The first is assigned to the first etc.
// speak('mario', 'morning');

// we can give the parameters a default value ie. name='mario', time='night'

// const speak = function (name = 'luigi', time = 'night') {
//   console.log(`good ${time} ${name}!`);
// };

// speak();
// speak('shaun', 'afternoon');

// sometimes we don't want to log the result to the console but return the value so that we can use it elsewhere later on....

// const calcArea = function (radius) {
//   let area = 3.14 * radius ** 2;
// we don't want to log this to the console. We want to return it. We want to return this variable, 'area'. now instead of logging the value to the console, we are returning a value
//   return area;
// };

// when a function returns a value, what we need to do is store that value in some sort of variable that can be called ANYTHING. Here it is called area but that doesn't interfere with the local variable declared in the calcArea function:
// const area = calcArea(5);
// now 'const area' has global scope, is set to value of the function 'calcArea' with the parameter call set to 5.
// console.log(area);

// to clean the above function up a little we can get rid of the local variable and return it directly:

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};
const area = calcArea(5);
console.log(area);
// now that we have that variable we can use that
