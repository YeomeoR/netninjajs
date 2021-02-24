const getTodos = (callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // track the progress of the request
    request.addEventListener('readystatechange', () => {
      //   console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    // type of request and where to get it from
    //   request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', 'Todos.json');
    // send the request
    request.send();
  });
};

//call the Todos() promise, then output/pass-in the data, catch the error and output the error
getTodos('/Todos.json')
  .then((data) => {
    console.log('promise resolved', data);
  })
  .catch((err) => {
    console.log('promise rejected: ', err);
  });

// console.log(1)
// console.log(2)

// getTodos((err, data) => {
//     console.log('callback fired')
//     // console.log(err, data)
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// });
// console.log(3)
// console.log(4)

//promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     // resolve('some data');
//     reject('some error');
//   });
// };

// getSomething().then((data) => {
//     console.log(data)
// }, (err) => {
//         console.log(err)
// });

// getSomething().then(data => { console.log(data) }).catch(err => {
//     console.log(err)
// })
