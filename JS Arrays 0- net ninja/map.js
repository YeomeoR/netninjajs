// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// map() iterates over an array and returns an updated value for each item in the array and then pushes each item up into a new updated array. The new array items are stored in a new array and the original array remains intact.

// for each 'price' return the sale price
// const salePrices = prices.map(price => price / 2);
// console.log(salePrices)

const products = [
  { name: 'gold start', price: 20 },
  { name: 'mushrooom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 },
];

const saleProducts = products.map((product) => {
    if (product.price > 30) {
      return {name: product.name, price: product.price /2}
    } else {
        return product
  }
});
console.log(saleProducts)
