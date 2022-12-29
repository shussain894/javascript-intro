class ShoppingBasket {
  constructor () {
    this.items = []
  }
  
  getTotalPrice() {
    return this.items.reduce(
      (add, value) => add + value.price, 0);
  }

  addItem(candy) {
    return this.items.push(candy)
  }
}

module.exports = ShoppingBasket;