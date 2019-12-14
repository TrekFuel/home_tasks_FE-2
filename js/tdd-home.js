// eslint-disable-next-line no-unused-vars
function positiveSum(arr) {
  // eslint-disable-next-line no-unused-vars
  const num = [4, -1, 2, 5, 0];
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}


// eslint-disable-next-line no-unused-vars
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}


// eslint-disable-next-line no-unused-vars
function centuryFromYear(year) {
  const century = year / 100;
  return Math.ceil(century);
}


// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line consistent-return,no-unused-vars
function arrayDiff(arr1, arr2) {
  if (arr1.length === 0) {
    return [];
  } else if (arr2.length === 0) {
    return arr1;
  }
  // eslint-disable-next-line no-unused-vars,no-undef
  const resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let toAdd = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        toAdd = true;
      }
    }
    if (toAdd) {
      // eslint-disable-next-line no-undef
      resultArr.push(arr1[i]);
      toAdd = false;
    }
  }

  // eslint-disable-next-line no-undef
  return resultArr;
}
