const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// RegEx stipulating that must be letters between 6&12 long
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // validation
  const username = form.username.value;

  // created a div class of feedback in html. Grabbed it at the top of this file. Ternary operator instead of if statement to put the feedback in the browser.

  usernamePattern.test(username)
    ? (feedback.textContent = 'that username is valid')
    : (feedback.textContent =
        'username needs to be between 6 & 12 chars long with letters or numbers, you doylem!');
});

// live feedback
form.username.addEventListener('keyup', (e) => {
    console.log(e)
  // console.log(e.target.value, form.username.value);
  usernamePattern.test(e.target.value)
    ? form.username.setAttribute('class', 'success')
    : form.username.setAttribute('class', 'error');
});
