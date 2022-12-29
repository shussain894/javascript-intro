// addToBatch = (array, num) => {
//   if (array.length <= 4) {
//     return array.concat(num);
//   } else { 
//     return array;
//   }
// }

// console.log(addToBatch([1], 3));
// console.log(addToBatch([1, 2, 3], 4)); 
// console.log(addToBatch([], 8)); 
// console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); 
// console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); 


class Candy {
  constructor(name, price) {
    this.name = name,
    this.price = price
  }

  getName() {
    return this.name
  }

  getPrice() {
    return this.price
  }
}

module.exports = Candy;

