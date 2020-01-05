function Timer(renderElement, limit = 60) {
  let value = limit;
  let isOnPause = false;
  let intervalId = null;
  const element = renderElement;

  this.start = function () {
    intervalId = setInterval(() => {
      if (value === 0) {
        clearInterval(intervalId);
      }
      element.innerHTML = value;
      value -= 1;
    }, 1000);
  };

  this.pause = function () {
    if (!isOnPause) {
      clearInterval(intervalId);
      isOnPause = true;
      return true;
    }
    this.start();
    isOnPause = false;
    return true;
  };
}

const timerWindow = document.querySelector('#timerWindow');
const timerButton = document.querySelector('#timerButton');
const timer = new Timer(timerWindow, 60);
timer.start();

timerButton.addEventListener('click', () => {
  timer.pause();
});
