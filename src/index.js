// modules

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "sanitize.css/reduce-motion.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";
import "./index.css";

const input = document.querySelector("#client-input");
const searchButton = document.querySelector(".search-button");
const header = document.querySelector(".header-container");
const footer = document.querySelector("footer");
const informationContainer = document.querySelector(".information-container");
const informationCard = document.querySelector(".information-card");
const cityTitle = document.querySelector(".city-title");
const temperature = document.querySelector(".temperature");
const dayTemperature = document.querySelector(".day-temperature");
const nightTemperature = document.querySelector(".night-temperature");
const weatherDescriptor = document.querySelector(".weather-descriptor");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const date = document.querySelector(".date");
const urls = [
  `https://api.giphy.com/v1/gifs/6036p0cTnjUrNFpAlr?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`,
];

const fetcher = (url) => fetch(url).then((response) => response.json());

const iconChanger = (url) => {
  if (url === urls[4]) {
    informationCard.style.backgroundSize = "70%";
  } else {
    informationCard.style.backgroundSize = "cover";
  }
  fetcher(url).then((data) => {
    informationCard.style.backgroundImage = `url(${data.data.images.downsized.url})`;
  });
};

const informationsChanger = (processedCityWeatherData) => {
  cityTitle.textContent = processedCityWeatherData.city;
  temperature.textContent = processedCityWeatherData.temperature;
  weatherDescriptor.textContent = processedCityWeatherData.weather;
  dayTemperature.textContent = processedCityWeatherData.dayTemp;
  nightTemperature.textContent = processedCityWeatherData.nightTemp;
  humidity.textContent = processedCityWeatherData.humidity;
  wind.textContent = processedCityWeatherData.wind;
};

const colorChanger = (color1, color2, color3) => {

  header.style.backgroundColor = `${color1}`;
  informationContainer.style.backgroundColor = `${color2}`;
  footer.style.backgroundColor = `${color3}`;
};

const moodSelector = (processedCityWeatherDescription) => {
  console.log(processedCityWeatherDescription);
  const weatherPersona = [
    {
      description: "Clear",
      id: "loUqCMSfXHcsVb3cUZ",
      color1: "darkseagreen",
      color2: "gold",
      color3: "darkseagreen",
    },
    {
      description: "Clouds",
      id: "c31WXGK1jLQBy",
      color1: "darkseagreen",
      color2: "white",
      color3: "darkseagreen",
    },
    {
      description: "Drizzle",
      id: "3oEdvbelTmMXOQ9VDO",
      color1: "#e4e8ff",
      color2: "#3c3cff",
      color3: "#e4e8ff",
    },
    {
      description: "Rain",
      id: "t7Qb8655Z1VfBGr5XB",
      color1: "#e4e8ff",
      color2: "#3c3cff",
      color3: "#e4e8ff",
    },
    {
      description: "Thunderstorm",
      id: "3osxYzIQRqN4DOEddC",
      color1: "#e6eaef",
      color2: "midnightblue",
      color3: "#e6eaef",
    },
    {
      description: "Snow",
      id: "12wteMTXxjLaVO",
      color1: "aliceblue",
      color2: "lightblue",
      color3: "aliceblue",
    },
    {
      description: "Mist",
      id: "sZmv85pZ8NG60HU9QK",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Smoke",
      id: "r2OMuTCFo0rv2rgAL5",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Haze",
      id: "dgeIH5RPynA6Q",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Dust",
      id: "tqtZDj5BqC0CY",
      color1: "#eef1b9",
      color2: "#eef1b9",
      color3: "#eef1b9",
    },
    {
      description: "Fog",
      id: "l2Je9dUI5LpzfHGTe",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Sand",
      id: "BXPlMrO9cyYTK",
      color1: "#eef1b9",
      color2: "#eef1b9",
      color3: "#eef1b9",
    },
    {
      description: "Ash",
      id: "r5gHt2TCIiHK0",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Squall",
      id: "HmTLatwLWpTQk",
      color1: "e7f0f7",
      color2: "e7f0f7",
      color3: "e7f0f7",
    },
    {
      description: "Tornado",
      id: "MXvDhlmD0eB5qNvvjZ",
      color1: "e7f0f7",
      color2: "e7f0f7",
      color3: "e7f0f7",
    },
  ];
  const weatherLogo =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].id;
  urls[3] = `https://api.giphy.com/v1/gifs/${weatherLogo}?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`;
  iconChanger(urls[3]);
  const weatherColor1 =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].color1;
  const weatherColor2 =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].color2;
  const weatherColor3 =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].color3;
    colorChanger(weatherColor1, weatherColor2, weatherColor3)
};

const processCityData = (rawCityWeatherData) => {
  console.log(rawCityWeatherData);
  const processedCityWeatherData = {
    city: rawCityWeatherData.name,
    temperature: `${rawCityWeatherData.main.temp} K`,
    weather: rawCityWeatherData.weather[0].main,
    dayTemp: `Day ${rawCityWeatherData.main.temp_max} K`,
    nightTemp: `Night ${rawCityWeatherData.main.temp_min} K`,
    humidity: `${rawCityWeatherData.main.humidity} %`,
    wind: `${rawCityWeatherData.wind.speed} m/s`,
  };
  moodSelector(processedCityWeatherData.weather);
  informationsChanger(processedCityWeatherData);
};

const getCityData = () => {
  Promise.resolve(iconChanger(urls[0]))
    .then(() => fetcher(urls[1]))
    .then((cityNameData) => {
      urls[2] = `https://api.openweathermap.org/data/2.5/weather?lat=${cityNameData["0"].lat}&lon=${cityNameData["0"].lon}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      return fetcher(urls[2]);
    })
    .then((rawCityWeatherData) => {
      processCityData(rawCityWeatherData);
    })
    .catch((error) => {
      console.log(error);
      urls[4] = `https://api.giphy.com/v1/gifs/8L0Pky6C83SzkzU55a?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`;
      const ErrorWeatherData = {
        city: `Couldn't find that city in our database`,
        temperature: `No data`,
        weather: `No data`,
        dayTemp: `No data`,
        nightTemp: `No data`,
        humidity: `No data`,
        wind: `No data`,
        color: `black`,
      };
      iconChanger(urls[4]);
      informationsChanger(ErrorWeatherData);
      colorChanger(`darkseagreen`, `white`, `darkseagreen`)
    });
};

const userDemand = (e) => {
  if (e.key === "Enter" || e.type === "click") {
    if (input.value !== "") {
      urls[1] = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      getCityData();
    }
  }
};

input.addEventListener("keyup", (e) => userDemand(e));
searchButton.addEventListener("click", (e) => userDemand(e));

const dateToday = () => {
  date.textContent = new Date().toDateString();
};

window.addEventListener("load", () => {
  urls[1] = `http://api.openweathermap.org/geo/1.0/direct?q=Rabat&appid=03923b23af6d02daed9f1c90b95acfc8`;
  dateToday();
  getCityData();
});
