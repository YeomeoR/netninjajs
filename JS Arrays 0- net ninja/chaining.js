const products = [
  { name: 'gold start', price: 20 },
  { name: 'mushrooom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 },
];

// first filter then map it to another array with a sale price
// const filtered = products.filter((product) => product.price > 20);

// const promos = filtered.map((product) => {
//   return `The ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products //the products array
    .filter(product => product.price > 20) //filters each product WHERE(=>) the product's price is greater than 20
    .map(product => `The ${product.name} is ${product.price / 2} pounds`);//then maps over the array and takes each product WHICH BECOMES(=>) the product name and half the product price.

console.log(promos);