const renderElementAlertWindow = document.querySelector('#renderElementAlertWindow');
const alertWindow = document.querySelector('#alertWindow');
const inputWindow = document.querySelector('#inputWindow');
const startButton = document.querySelector('#startButton');
const sendButton = document.querySelector('#sendButton');

const inputsForTimer = {
  text1: 'Измерение начнется через: ',
  text2: 'Измерение: ',
  text3: 'Введите количество ударов, пожалуйста',
  value1: 5,
  value2: 15,
};

function Timer(renderElement, msg, limit) {
  const element = renderElement;
  const text = msg;
  let value = limit;
  let intervalId = null;

  this.start = function () {
    intervalId = setInterval(() => {
      if (value === 0) {
        clearInterval(intervalId);
      }
      alertWindow.classList.add('d-block');
      element.innerHTML = text + value;
      value -= 1;
    }, 1000);
  };

  this.showMsg = function () {
    setTimeout(() => {
      element.innerHTML = inputsForTimer.text3;
    }, ((inputsForTimer.value1) * 1000) + ((inputsForTimer.value2) * 1000) + 2000);
  };

  this.showResult = function () {
    const result = inputWindow.value;
    setTimeout(() => {
      element.innerHTML = `Ваш пульс составляет: ${(result) * 4} уд/мин`;
    }, 1000);
  };
}


const timer = new Timer(renderElementAlertWindow, inputsForTimer.text1, inputsForTimer.value1);
const timer2 = new Timer(renderElementAlertWindow, inputsForTimer.text2, inputsForTimer.value2);

startButton.addEventListener('click', () => {
  timer.start();

  setTimeout(() => {
    timer2.start();
  }, (inputsForTimer.value1) * 1000);

  timer2.showMsg();
});

sendButton.addEventListener('click', () => {
  timer2.showResult();
});
