// // grab the p tag
// const content = document.querySelector('p');
// // find the classes on the element
// console.log(content.classList);
// // add a class
// content.classList.add('error');
// // remove a class
// content.classList.remove('error');
// // add success
// content.classList.add('success');

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    // console.log(para.textContent)
    if (para.textContent.includes('error')) {
        para.classList.add('error')
    }
    if (para.textContent.includes('success')) {
        para.classList.add('success')
        
    }
})

// toggle a class
const title = document.querySelector('.title')
// give the title h1 a class of 'test'
title.classList.toggle('test')
//remove it
title.classList.toggle('test')

    