// eslint-disable-next-line consistent-return
function getUserData() {
  // eslint-disable-next-line no-alert
  const lastName = prompt('Введите Вашу фамилию');
  // eslint-disable-next-line no-alert
  const firstName = prompt('Введите Ваше имя');
  // eslint-disable-next-line no-alert
  const middleName = prompt('Введите Ваше отчество');
  if (lastName === null || firstName === null || middleName === null || lastName === '' || firstName === '' || middleName === '') {
    // eslint-disable-next-line no-alert
    alert('Введите ФИО корректно, пожалуйста');
    return getUserData();
  }
  // eslint-disable-next-line no-alert
  const age = +(prompt('Введите Ваш возраст'));
  if (age == null || age == '' || age !== +age) {
    // eslint-disable-next-line no-alert
    alert('Введите Ваш возраст корректно, пожалуйста');
    return getUserData();
  }
  // eslint-disable-next-line no-restricted-globals,no-alert
  const gender = confirm('Ваш пол-мужской?');
  // eslint-disable-next-line no-restricted-globals,no-alert
  const isRetired = confirm('Вы на пенсии?');
  // eslint-disable-next-line no-alert,no-useless-concat
  alert(`Ваша ФИО: ${lastName} ${firstName} ${middleName};` + ' ' + 'Ваш'
      // eslint-disable-next-line no-useless-concat
      + ' возраст:' + ` ${age};` + ' ' + 'Ваш возраст в днях: ' + `${age * 365}` + ';' + ' ' + 'Через 5 лет Вам будет: ' + `${+(age) + 5}` + ';' + ' ' + 'Ваш'
      // eslint-disable-next-line no-useless-concat
      + ' пол:' + ` ${gender};` + ' ' + 'Вы'
      + ' на'
      // eslint-disable-next-line no-useless-concat
      + ' пенсии:' + ` ${isRetired}.`);
}

getUserData();
