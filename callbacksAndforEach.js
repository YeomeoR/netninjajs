// callbacks and forEach loops
// We can pass in a function as an argument. This is a callback function (line10.

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     // value is called inside the callback
//     callbackFunc(value);
// };

// now we pass the 'callback' value into the callback function
// myFunc(function (value) {
// do something
//     console.log(value);
// });

// convert the above into an arrow function
// myFunc(value => console.log(`The value of the callbackFunc is: ${value}`))

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// forEach iterates over an array andm expects a callback function
// people.forEach(function () {
//     // for each element in the people array, it will log 'something' to the console (5 times)
//     console.log('something')
// })

// people.forEach(function (person) {
//     // this function can take additional parameters. The first one here will be 'person' with is the value of whatever it is that we are iterating over... usually, the singular of the array name. We get access to this item on each iteration of the forEach. The second is the 'index'
//     console.log(person);
// });

// as an arrow
// people.forEach((person) => console.log(person));

// // with the second parameter
// people.forEach((person, index) => {
//   console.log(index, person);
// });

// normally, a callback function would be called which might have been declared somewhere else. To do that we need to create a new const:

// const logPerson = (person, index) => {
//     console.log(`${index} - hello, ${person}`)
// };

// // now we need to call this function within our forEach which is essentially passing the arrow function above into the forEach loop:
// people.forEach(logPerson)

// render it in the browser
// get a reference to the 'ul'
const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(function (person) {
  // person is the element that we are currently iterating over
  // create html template and append it to the html variable for each iteration of the loop.
  html += `<li style="color: pruple">${person}</li>`;
});
console.log(html); // the raw html is logged to the console with tags

// now we need to grab something from the html document (line 52).
// now we set the innerHTML equal to the html variable
ul.innerHTML = html; // now there is a list of the people in the browser
