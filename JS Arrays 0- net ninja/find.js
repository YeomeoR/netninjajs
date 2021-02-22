// find method
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// returns a boolean. If true it moves on to the next index of the array. If finds the first value in an array that passes a certain condition. So to find the first value over 50...
const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);
