//example 1, sorting strings
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// sort alphabetically. It doesn't produce a new array, it's destructive and changes the original array
// names.sort();
// names.reverse()
// console.log(names)

//example 2, sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort() // only looks at the first number to sort, not the whole number
// scores.reverse()
// console.log(scores)

scores.sort((a, b) => b - a); // see below 
console.log(scores);

//example 3, sorting objects
const players = [
  { name: 'mario', score: 20 },
  { name: 'luigi', score: 10 },
  { name: 'chun-li', score: 50 },
  { name: 'yoshi', score: 30 },
  { name: 'shaun', score: 70 },
];

//checking consecutive scores to see if one is greater than the other, if true returns -1, 1 or 0
// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// simplified: if b.score-a.score is a negative number (-1) or the other way round (1) etc. or if both are equal, reorder OR 0 so no change
players.sort((a, b) => b.score - a.score);

console.log(players);
