const getButton = document.getElementById('getButton');
const renderElement = document.getElementById('container');

function getGrodnoForecast() {
    const proxy = 'https://cors-anywhere.herokuapp.com';
    const API = 'https://api.darksky.net/forecast';
    const key = '9ac094ddbff4dcbaf603076dfbe3874c';
    const params = '53.683802,23.833985,2020-02-05T15:00:00?lang=ru&units=si';

  fetch(`${proxy}/${API}/${key}/${params}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      // eslint-disable-next-line no-undef
      const unixDate = moment.unix(response.currently.time);
      const humanDate = unixDate.locale('ru').format('MMMM Do YYYY, h:mm:ss a');

    fetch(`${proxy}/${API}/${key}/${params}`, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            // eslint-disable-next-line no-undef
            const unixDate = moment.unix(response.currently.time);
            const humanDate = unixDate.locale('ru').format('MMMM Do YYYY, h:mm:ss a');

            renderElement.innerHTML = `<div class="col-12">
  Дата: ${humanDate}
</div>
    <div class="col-12">
      Сводка: ${response.currently.summary}
    </div>
    <div class="col-12">
      Температура: ${response.currently.temperature}
    </div>
    <div class="col-12">
      Температура по ощущениям: ${response.currently.apparentTemperature}
    </div>
    <div class="col-12">
      Влажность: ${response.currently.humidity}
    </div>
    <div class="col-12">
      Давление: ${response.currently.pressure}
    </div>
    <div class="col-12">
      Скорость ветра: ${response.currently.windSpeed}
    </div>
    <div class="col-12">
      Видимость: ${response.currently.visibility}
    </div>`;
            renderElement.classList.add('d-block');
        });
}

getButton.addEventListener('click', (event) => {
    event.preventDefault();
    getGrodnoForecast();
});
