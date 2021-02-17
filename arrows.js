// regular function
// const calcArea = function(radius) {
//     return 3.14 * radius ** 2;
// }

// arrow function version of the above function. When there is only one parameter, we can take away the parentheses. We can also take away the return if the return is only one line and take away the curly braces too.
// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// same as the above arrow function but DRYer.
const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log('area is: ', area);

// regular functions into arrow functions

// const greet = function() {
//     return 'hello, world';
// }

const greet = () => 'hello, world';
// store the result in a variable
const result = greet();
// log the new variable to the console
console.log(result);

// function takes in 2 params
// const bill = function (products, tax) {
// inside we create a local variable
//   let total = 0;
// we cycle through some kind of array
//   for (let i = 0; i < products.length; i++) {
// we adding the product total and multiply by the tax
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// log the bill function and pass in a couple of arguments, the product prices are in an array...
// console.log(bill([10, 15, 30], 0.2));
// here we are cycling through the array and multiplying the product price by the tax and returning the total

// arrow version of the above. semi-colon at the end
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
console.log(bill([10, 15, 30], 0.2));
//this is not a lot shorter than the original ordinary function. We have removed the function keyword and added an arrow
