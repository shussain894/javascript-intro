const printHello = (callback) => {
  console.log('Hello there');
}

const executeAfterDelay = (callback, timer) => {
  setTimeout(callback, (timer * 1000));
}

executeAfterDelay(printHello, 4)
