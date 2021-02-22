// iterates over the array and returns a NUMBER not an updated array. Just a number based on the array. It takes a callback function as an argument

// const scores = [10, 20, 60, 40, 70, 90, 30];

// how many numbers are over 50 in the array

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0); // the 0 here, is the first value of the accumulator

// console.log(result)

// an array of objects
const scores = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 80 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 90 },
    { player: 'crystal', score: 60 },
];

const marioTotal = scores.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0)

console.log(marioTotal)

// we can edit the acc as we iterate the array.