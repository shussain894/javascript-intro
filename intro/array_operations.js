const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));

console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out

console.log(filterLongNumbers([]));

//////////////////////////////////////////

const message = (namesAndDiscounts) => {
  return `Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best candies for you today!`;
}

const generateMessages = (names) => {
  return names.map(message);
}   

const discounts = (discount) => {
  return discount.map(message)
}

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 40% off our best candies for you today!',
  'Hi Josh! 30% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 60% off our best candies for you today!'
]