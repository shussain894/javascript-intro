const notifyByEmail = (email) => {
  return 'email sent to: <EMAIL>';
}

const notifyByText = (number) => {
  return `text sent to: ${number}`;
}

const notify = (number, notifyFunction) => {
  return notifyFunction(number);
}

notify('07535032967', notifyByText);