// format: 'YYYY-MM-DD'

function daysLeftToBirthday(date) {
  const year = 366;
  // eslint-disable-next-line no-undef
  const now = moment().format('MM-DD');
  const birthdayWithoutYear = date.split('').slice(5).join('');
  // eslint-disable-next-line no-undef
  const parsedBirthday = moment(birthdayWithoutYear);
  const daysLeft = parsedBirthday.diff(now, 'days');

  if (daysLeft < 0) {
    const inNextYear = daysLeft + year;
    // eslint-disable-next-line no-useless-concat,no-console
    console.log(`${inNextYear}` + ' ' + 'days left');
    // eslint-disable-next-line no-useless-concat,no-console
  } else if (daysLeft === 0) {
    // eslint-disable-next-line no-console
    console.log('Happy Birthday!');
  } else {
    // eslint-disable-next-line no-console,no-useless-concat
    console.log(`${daysLeft}` + ' ' + 'days left');
  }
}

daysLeftToBirthday('1996-12-01');
