let counter = 0

const increment = () => {
  console.log(counter++)
}

setInterval(increment, 2000);