function secondsLeftToTheDayEnd() {
  // eslint-disable-next-line no-undef
  const now = moment();
  // eslint-disable-next-line no-undef
  const dayEnd = moment().endOf('day');
  const secondsLeft = (dayEnd - now) / 1000;
  // eslint-disable-next-line no-alert,no-useless-concat
  alert(`${secondsLeft}` + ' ' + 'seconds');
}

secondsLeftToTheDayEnd();
