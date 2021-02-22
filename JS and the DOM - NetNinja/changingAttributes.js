// first we have to grab the attribute we want
// const link = document.querySelector('a');



// // finding out what the href attribute is attributed to...
// console.log(link.getAttribute('href'));
// // set the attribute: first param is the attribute, second param is the change you want to make to the attribute
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// // this doesn't change it in the console but in the HTML. Inpect the html.
// // This will change the product in the browser
// link.innerText = 'The Net Ninja Website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// // set the class attribute to success. Could be useful for changing the colour of a successful action to green or unsuccessful to red
// msg.setAttribute('class', 'success');
// // set the style of the attribute, href.
// msg.setAttribute('style', 'color: green')
// beware, this will overwrite any styles already inline on the element. To avoid this
const title = document.querySelector('h1')

title.style.margin = '50px';
title.style.fontSize = '60px'
title.style.color = 'blue';
// title.style.margin = '';

