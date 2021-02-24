// simply fetch what you need and chain on '.then' for when the promise is resolved and attaches callbacks for the resolution and/or rejection of the Promise.
fetch('Todos.json').then((response) => {
    console.log('resolved', response)
    return response.json(); // this returns a promise so we can tack on a '.then()'
    // and then '.catch' and passes in an 'error' object which attaches a callback for only the rejection of the Promise.
}).then((data) => { // firing a function when we actually have acces to that data
console.log(data)
}).catch((err) => {
    console.log('rejected', err)
})