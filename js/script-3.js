function isPalindrome() {
  // eslint-disable-next-line no-alert
  const userInput = prompt('Введите слово-палиндром');
  const reversedUserInput = userInput.split('').reverse().join('');
  if (userInput.localeCompare(reversedUserInput) === 0) {
    // eslint-disable-next-line no-alert
    return alert('Данное слово-палиндром!');
  }
  // eslint-disable-next-line no-alert
  return alert('Данное слово не является палиндромом');
}

isPalindrome();
