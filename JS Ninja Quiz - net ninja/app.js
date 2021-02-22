const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    answer === correctAnswers[index] ? (score += 25) : score;
  });
    //scroll to the top
    scrollTo(0, 0);
    //show result on page
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none'); // removes the class from the list of classes because this class has a bootstrap of display: none;

    // running up the score over 10ms and clear the setInterval when the output is equal to the score.
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        output === score ? clearInterval(timer) : output++;
    }, 10)
});

// window object (global object)
// setInterval(() => {
//     console.log('hello')
// }, 1000)


