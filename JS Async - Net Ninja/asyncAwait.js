// whenever we call an async function, it always returns a promise, regardless of what is in the function code block
const getTodos = async () => {
    // storing the response in a variable we now need to stall JS and await the response instead of tacking on the .then()
    const response = await fetch('Todos.json');
    // now we have the waited for the fetch, we wait for the data, waiting for the json response (response.json()). But we still have to catch an error at this point:
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');// this will now be the message on the catch method's err.message
    }

    const data = await response.json();
    console.log(data)// this checks the data but we really want to return the data
    return data;
    // we can chain as many of these together with different variables assigned to them as we like. It is non-blocking
};

// calling the Todos to run when we have the promise but we need to tack on a '.then()'. We need to do this so that the data is presented when we finally have it. The '.then()' takes in a callback function and returns the data
getTodos()
    .then(data => console.log('resolved', data)) // now we need to catch any errors
    .catch(err => console.log('rejected', err.message))

// fetch('Todos.json').then((response) => {
//     console.log('resolved', response)
//     return response.json();
// }).then((data) => {
// console.log(data)
// }).catch((err) => {
//     console.log('rejected', err)
// })
