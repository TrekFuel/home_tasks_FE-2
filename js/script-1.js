function getNumWord(num, word1, word2, word5) {
  const dd = num % 100;

  if ((dd >= 11) && (dd <= 19)) {
    return word5;
  }

  const oneDigit = num % 10;
  switch (true) {
    case (oneDigit === 1):
      return word1;
    case (oneDigit >= 2 && oneDigit <= 4):
      return word2;
    default:
      return word5;
  }
}


// function makeTest() {
// //   // eslint-disable-next-line radix,no-alert
// //   const applesCount = parseInt(prompt('Сколько яблок?'));
// //   if (applesCount) {
// //     // eslint-disable-next-line no-alert,no-useless-concat
// //     alert(`${'У вас' + ' '}${applesCount} ${getNumWord(applesCount,
// //       'яблоко', 'яблока', 'яблок')}`);
// //   }
// // }
// //
// // makeTest();
