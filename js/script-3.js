function isPalindrome(word) {
  // eslint-disable-next-line no-alert
  const userInput = word;
  const reversedUserInput = userInput.split('').reverse().join('');
  if (userInput.localeCompare(reversedUserInput) === 0) {
    // eslint-disable-next-line no-alert
    return 'Данное слово-палиндром!';
  }
  // eslint-disable-next-line no-alert
  return 'Данное слово не является палиндромом';
}

isPalindrome();
