const scores = [10, 30, 15, 25, 50, 40, 5];

//filter()
// iterate over an array performs a check on the array inside a callback function. It then cycles through the array and if the check passes, keeps that item in the filtered array. Otherwise, it removes it.

// scores.filter(() => {
//     return true; // everything will stay in the array
// })

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// })
// console.log(filteredScores)

const users = [
    { name: 'shaun', premium: true },
    { name: 'mario', premium: false },
    { name: 'yoshi', premium: false },
    { name: 'chun-li', premium: true },
];

// filter out the premium users. Use each 'user' as the parameter and dot notation to determine if the condition is true or false. If it's true, it will return in the new filtered array.
const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers)