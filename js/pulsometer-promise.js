const renderElementAlertWindow = document.querySelector('#renderElementAlertWindow');
const alertWindow = document.querySelector('#alertWindow');
const inputWindow = document.querySelector('#inputWindow');
const startButton = document.querySelector('#startButton');
const sendButton = document.querySelector('#sendButton');
const resetButton = document.querySelector('#resetButton');

const inputsForTimer = {
  text1: 'Измерение начнется через: ',
  text2: 'Измерение: ',
  text3: 'Введите количество ударов, пожалуйста',
  value1: 5,
  value2: 15,
};

function Timer(renderElem, msg, limit, done) {
  this.renderElem = renderElementAlertWindow;
  this.msg = msg;
  this.limit = limit;
  this.done = done;
  this.timerId;

  this.start = () => new Promise((resolve, reject) => {
    this.timerId = setInterval(() => {
      alertWindow.classList.add('d-block');
      this.limit -= 1;
      this.renderElem.innerHTML = this.msg + this.limit;
      if (this.limit === 0) {
        this.pause();
        resolve('Success');
      }
      if (this.limit < 0) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error');
      }
    }, 1000);
  });

  this.pause = () => {
    clearTimeout(this.timerId);
  };
}

const timer1 = new Timer(renderElementAlertWindow, inputsForTimer.text1, inputsForTimer.value1);
const timer2 = new Timer(renderElementAlertWindow, inputsForTimer.text2, inputsForTimer.value2);

const doneFn2 = () => {
  renderElementAlertWindow.innerHTML = inputsForTimer.text3;
  sendButton.addEventListener('click', () => {
    const result = inputWindow.value;
    renderElementAlertWindow.innerHTML = `Ваш пульс составляет: ${(result) * 4} уд/мин`;
  });

  resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    timer1.limit = inputsForTimer.value1;
    timer2.limit = inputsForTimer.value2;
    renderElementAlertWindow.innerHTML = '';
    inputWindow.value = '';
  });
};

startButton.addEventListener('click', () => {
  // eslint-disable-next-line max-len
  timer1.start()
    .then(timer2.start)
    .then(doneFn2);
});
