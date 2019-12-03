function isPalindrome() {
    let userInput = prompt('Введите слово-палиндром');
    let reversedUserInput = userInput.split("").reverse().join("");
    if (userInput.localeCompare(reversedUserInput) === 0) {
        return alert('Данное слово-палиндром!')
    } else {
        return alert('Данное слово не является палиндромом')
    }
}

isPalindrome();