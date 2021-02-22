// get an element by id (Id on an element should be unique. No other element should have the same id). We don't need a '#'
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
// we can't use a forEach loop on an HTMLCollection which is what is logged using this method of grabbing elements by class. QuerySelectorAll() gives us a nodeList which can be iterated through using a forEach.

// get elements by their tag name
const paras1 = document.getElementsByTagName('p');
console.log(paras1);
console.log(paras1[1]);
