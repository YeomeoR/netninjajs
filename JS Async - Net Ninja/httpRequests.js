// Make HTTP requests to get data from abnouther server
// Make these requests to  API endpoints (like urls)
// make a request object
const request = new XMLHttpRequest();

// track the progress of the request
request.addEventListener('readystatechange', () => {
//   console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText)
    } else if (request.readyState === 4) {
        console.log('could not get the data')
    }
});

// type of request and where to get it from
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// send the request
request.send();
