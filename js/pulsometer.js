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

function Timer(renderElem, msg, limit, done) {
  this.renderElem = renderElem;
  this.msg = msg;
  this.limit = limit;
  this.done = done;
  this.timerId;

  this.start = function () {
    this.timerId = setInterval(() => {
      alertWindow.classList.add('d-block');
      this.renderElem.innerHTML = this.msg + this.limit;
      this.limit -= 1;
      if (this.limit === 0) {
        this.pause();
        this.done ? this.done() : null;
      }
    }, 1000);
  };

  this.pause = function () {
    clearTimeout(this.timerId);
  };

  this.showMsg = function () {
    setTimeout(() => {
      this.renderElem.innerHTML = inputsForTimer.text3;
    }, ((inputsForTimer.value1) * 1000) + ((inputsForTimer.value2) * 1000) + 2000);
  };

  this.showResult = function () {
    const result = inputWindow.value;
    setTimeout(() => {
      this.renderElem.innerHTML = `Ваш пульс составляет: ${(result) * 4} уд/мин`;
    }, 1000);
  };
}


const timer = new Timer(renderElementAlertWindow, inputsForTimer.text1, inputsForTimer.value1);
const timer2 = new Timer(renderElementAlertWindow, inputsForTimer.text2, inputsForTimer.value2);

startButton.addEventListener('click', (event) => {
  event.preventDefault();
  timer.start();

  setTimeout(() => {
    timer2.start();
  }, (inputsForTimer.value1) * 1000);

  timer2.showMsg();
});

sendButton.addEventListener('click', () => {
  timer2.showResult();
});
