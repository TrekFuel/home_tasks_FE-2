// type in words through whitespace characters

function wordsFilter(wordsList) {
  const wordsArray = wordsList.split(' ');
  const filteredWordsArray = wordsArray.filter((word) => word !== 'Audi' && word !== 'Mercedes-Benz' && word !== 'Mercedes' && word !== 'Porsche');
  const result = filteredWordsArray.join(', ');
  // eslint-disable-next-line no-console
  console.log(result);
}

wordsFilter('BMW Audi Volkswagen Chrysler Dodge Mercedes-Benz Maybach'
    + ' Mercedes Ferrari Porsche Lamborghini Nissan');
