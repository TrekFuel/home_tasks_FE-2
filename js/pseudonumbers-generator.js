function pseudonumbersGenerator() {
  let count = 1;
  let intervalId = null;

  intervalId = setInterval(() => {
    if (count > 19) {
      clearInterval(intervalId);
    }
    count += 1;
    const cryptoNumStor = new Uint32Array(1);
    const pseudoNum = window.crypto.getRandomValues(cryptoNumStor);
    const randomValue = pseudoNum[0];

    if (randomValue % 2 === 0) {
      console.log(`${randomValue}`);
      throw new Error('Ошибка: данное число четное');
    } else if (randomValue % 2 !== 0) {
      console.log(`${randomValue} - Успешно: нечетное число`);
    }
    return false;
  }, 1000);
}

pseudonumbersGenerator();
