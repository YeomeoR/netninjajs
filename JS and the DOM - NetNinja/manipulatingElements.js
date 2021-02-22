// grab the text inside the first p tag
// const para = document.querySelector('p');

// console.log(para.innerText)
// this gives us a preview of this tag in the console

// para.innerText = 'Ninjas are awesome'
// console.log(para)
// // can append extra text to the element using '+=' operator
// para.innerText += '.... Ninjas are awesome!' 
// console.log(para)

// to change all of the p tag text
// const paras = document.querySelectorAll('p')
// to see all of the content of each p tag in the console
// paras.forEach(para => {
//     // console.log(para.innerText)
//     para.innerText += ' and this is new text';
// })
// console.log(para.innerText)

// to change the HTML of a tag or class
// const content = document.querySelector('.content')
// this is how we grab it
// console.log(content.innerHTML)
// content.innerHTML += '<h2>This is the new H2</>'// += operator to append or just = to overwrite

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</P>`;
// })