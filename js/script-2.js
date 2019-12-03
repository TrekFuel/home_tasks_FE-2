function getUserData() {
    let lastName = prompt('Введите Вашу фамилию');
    let firstName = prompt('Введите Ваше имя');
    let middleName = prompt('Введите Ваше отчество');
    if (lastName === null || firstName === null || middleName === null || lastName === '' || firstName === '' || middleName === '') {
        return getUserData(alert('Введите ФИО корректно, пожалуйста'))
    }
    let age = +(prompt('Введите Ваш возраст'));
    if (age == null || age == '' || age !== +age) {
        return getUserData(alert('Введите Ваш возраст корректно, пожалуйста'))
    }
    let gender = confirm('Ваш пол-мужской?');
    let isRetired = confirm('Вы на пенсии?');
    alert('Ваша ФИО: ' + lastName + ' ' + firstName + ' ' + middleName + ';' + ' ' + 'Ваш' +
        ' возраст:' + ' ' + age + ';' + ' ' + 'Ваш возраст в днях: ' + `${age * 365}` + ';' + ' ' + 'Через 5 лет Вам будет: ' + `${+(age) + 5}` + ';' + ' ' + 'Ваш' +
        ' пол:' + ' ' + gender + ';' + ' ' + 'Вы' +
        ' на' +
        ' пенсии:' + ' ' + isRetired + '.')
    ;
}

getUserData();