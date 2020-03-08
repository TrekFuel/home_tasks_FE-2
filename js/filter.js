// type in words through whitespace characters

function wordsFilter(wordsList) {
  const wordsArray = wordsList.split(' ');
  const bannedWords = ['Audi', 'Mercedes-Benz', 'Mercedes', 'Porsche'];
  const filteredWordsArray = wordsArray.filter((word) => !bannedWords.includes(word));
  const result = filteredWordsArray.join(', ');
  // eslint-disable-next-line no-console
  console.log(result);
}

wordsFilter('BMW Audi Volkswagen Chrysler Dodge Mercedes-Benz Maybach'
    + ' Mercedes Ferrari Porsche Lamborghini Nissan');
