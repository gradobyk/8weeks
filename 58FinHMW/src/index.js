//⏰Feature #1 In your project, display the current date and time using JavaScript: Tuesday 16:00

let currentTime = document.querySelector("#current-time");

let date = new Date();

function formatDate (date) {
let time = date.getHours();
if (time < 10) {
	time = `0${time}`;
}
let min = date.getMinutes();

if (min < 10) {
	min = `0${min}`;
}

let curDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = curDay[date.getDay()];

console.log(day);

return `${day} ${time}:${min}`;
}

currentTime.innerHTML = formatDate(date);

//<p>🕵️‍♀️Feature #2</p> <p>Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.</p> city-input

//Ключ

let apiKey = "c23a447e19efb6f70d65b26b00702afa";

//вбиваеш місто і тобі видає його в строці
//частина коду 1
function cityForm() {
//   event.preventDefault();

  let cityType = document.querySelector("#city-input");
  //   alert(`My city is: ${cityType.value}`);

  //частина коду 2

  let cityName = `${cityType.value}`;
  let city2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;

  //частина коду 3
function showWeather2(response) {
  //визначаємо що саме будемо зминювати за допомогою розпізнавача кваріСелектор
  let h1 = document.querySelector("h1");
  //округляємо температуру
  let temperature = Math.round(response.data.main.temp);
  //визначаємо що будемо зминювати крадуси за допомогою розпізнавача кваріСелектор
  let numberG = document.querySelector("#number-19");
  numberG.innerHTML = `${temperature}`;
  //визначаємо та змінюємо один з показників погоди клауді
  let weatherType = document.querySelector("#current-weather");
  let weatherTypeShow = response.data.weather[0].main;
  weatherType.innerHTML = `${weatherTypeShow}`;
  //визначаємо і змінюємо  Humidly: 77%
  let humidly = document.querySelector("#current-humidly");
  let humidlyShow = response.data.main.humidity;
  humidly.innerHTML = `Humidly: ${humidlyShow}%`;
  //визначаємо і змінюємо  Wind: 8 km/h
  let wind = document.querySelector("#current-wind");
  let windShow = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${windShow} km/h`;


}

  //   function cityShow2(response) {
  //     console.log(response.data);

  //     let geoLat = response.data.coord.lat;

  //     console.log(geoLat);

  //     let geoLon = response.data.coord.lon;

  //     console.log(geoLon);
  //   }
  // cityShow2

  //частина коду 2/2
  axios.get(`${city2}&appid=${apiKey}`).then(showWeather2);

//частина коду 1/2
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Here is ${cityType.value} info 😽`;
}

let city = document.querySelector("#submit-city");

city.addEventListener("click", cityForm);

//там де по місту показує погоду 





// function degreesChan() {
//   let numberG = document.querySelector("#number-19");
//   numberG.innerHTML = "19";
// }

// let degrees = document.querySelector("#degree-C");
// degrees.addEventListener("click", degreesChan);



//5/8HMW

function canApply() {
//варіант твого тепершнього місцезнаходження
function showWeather(response) {
  //визначаємо що саме будемо зминювати за допомогою розпізнавача кваріСелектор
  let h1 = document.querySelector("h1");
  //округляємо температуру
  let temperature = Math.round(response.data.main.temp);
  //визначаємо що будемо зминювати крадуси за допомогою розпізнавача кваріСелектор
  let numberG = document.querySelector("#number-19");
  numberG.innerHTML = `${temperature}`;
  //визначаємо та змінюємо один з показників погоди клауді
  let weatherType = document.querySelector("#current-weather");
  let weatherTypeShow = response.data.weather[0].main;
  weatherType.innerHTML = `${weatherTypeShow}`;
  //визначаємо і змінюємо  Humidly: 77%
  let humidly = document.querySelector("#current-humidly");
  let humidlyShow = response.data.main.humidity;
  humidly.innerHTML = `Humidly: ${humidlyShow}%`;
  //визначаємо і змінюємо  Wind: 8 km/h
  let wind = document.querySelector("#current-wind");
  let windShow = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${windShow} km/h`;

  h1.innerHTML = `You are in ${response.data.name} now 😻`;

  console.log(response.data);
}

function retrievePosition(position) {
  
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

}

let canButton = document.querySelector("button");
canButton.addEventListener("click", canApply);


// function cityForm(event) {
//   event.preventDefault();
//   let cityType = document.querySelector("#city-input");
//   //   alert(`My city is: ${cityType.value}`);
//   let h1 = document.querySelector("h1");
//   h1.innerHTML = `${cityType.value}`;
// }

// let city = document.querySelector("#seach-form");

// city.addEventListener("submit", cityForm);




