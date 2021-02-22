// store the reference that we want to grab in a variable. We want the first paragraph
const para = document.querySelector('p'); // grabs the first p tag and stops searching
console.log(para);
// get the 'error' p tag
const para2 = document.querySelector('.error');
console.log(para2);
// to get the other error paragraph we need to grab for the unique
const para3 = document.querySelector('div.error');
console.log(para3);

// TOP TIP ************
// When inspecting an element in the browser, click on the element and then go to the console. select the element that you highlighted and right click on it. Slect copy then select copy selector. We now have a unique path to that element which we can paste into the document.querySelector('body > h1');

// get all of the elements

const paras = document.querySelectorAll('p');
console.log(paras);
// to single out any elements in this we can use bracket notation
console.log(paras[2]);
// we can cycle through the elements using a forEach loop
paras.forEach((para) => {
  console.log(para);
});

// grab anything with the same class
const err = document.querySelectorAll('.error');
console.log(err)
