const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username'); // we need the value from the username input field that we are grabbing, here. The value is the text input of the user. We want to use this 'value'

// we add the event listener to the form not the submit button.
form.addEventListener('submit', (e) => {
  //the default action is to refresh on submit, really quickly. We need to prevent that default action
  e.preventDefault();
  // console.log(username.value)

  // if the element that you want the value from has an id we can use dot notation to access it:
  console.log(form.username.value); // this should do the same as the above querySelector
});
// testing RegEx
const username = 'shaunr2345';
const pattern = /^[a-z]{6,}$/;

// we can use a method called 'test' on a pattern
// let result = pattern.test(username); // returns a boolean
// console.log(result);

// result ? console.log('regex passed') : console.log('regex failed');

let result = username.search(pattern); // return the index of the match as an integer. -1 means it's not passed
console.log(result); // this fails because we have the carrot and the dollar in the regex. That means that they have to be specifically matched. Without them it would match with any chars around the matchin criteria
