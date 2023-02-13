// click or enter => get data => (loader => fetcher then indicatorChanger)

const input = document.querySelector("#client-input");
const searchButton = document.querySelector(".search-button");
const indicator = document.querySelector(".indicator");
const urls = [
  `https://api.giphy.com/v1/gifs/6036p0cTnjUrNFpAlr?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`,
];

const fetcher = (url) => fetch(url).then((response) => response.json());

const changer = (rawData) => {
  indicator.src = rawData.data.images.downsized.url;
};

const iconChanger = (url) => {
  fetcher(url).then((rawData) => {
    changer(rawData);
  });
};

const iconSelector = (processedCityWeatherData) => {
  console.log(processedCityWeatherData);
  const weatherDescription = [
    { description: "Clear", id: "loUqCMSfXHcsVb3cUZ" },
    { description: "Clouds", id: "c31WXGK1jLQBy" },
    { description: "Drizzle", id: "3oEdvbelTmMXOQ9VDO" },
    { description: "Rain", id: "t7Qb8655Z1VfBGr5XB" },
    { description: "Thunderstorm", id: "3osxYzIQRqN4DOEddC" },
    { description: "Snow", id: "12wteMTXxjLaVO" },
    { description: "Mist", id: "sZmv85pZ8NG60HU9QK" },
    { description: "Smoke", id: "r2OMuTCFo0rv2rgAL5" },
    { description: "Haze", id: "dgeIH5RPynA6Q" },
    { description: "Dust", id: "tqtZDj5BqC0CY" },
    { description: "Fog", id: "l2Je9dUI5LpzfHGTe" },
    { description: "Sand", id: "BXPlMrO9cyYTK" },
    { description: "Ash", id: "r5gHt2TCIiHK0" },
    { description: "Squall", id: "HmTLatwLWpTQk" },
    { description: "Tornado", id: "MXvDhlmD0eB5qNvvjZ" },
  ];
  const iconId =
    weatherDescription[
      weatherDescription.findIndex(
        (element) => element.description === processedCityWeatherData.weather
      )
    ].id;
  urls[3] = `https://api.giphy.com/v1/gifs/${iconId}?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`;
  iconChanger(urls[3]);
};

const processCityData = (rawCityWeatherData) => {
  console.log(rawCityWeatherData);
  const processedCityWeatherData = {
    city: rawCityWeatherData.name,
    temperature: rawCityWeatherData.main.temp,
    weather: rawCityWeatherData.weather[0].main,
    dayTemp: rawCityWeatherData.main.temp_max,
    nightTemp: rawCityWeatherData.main.temp_min,
    humidity: rawCityWeatherData.main.humidity,
    wind: rawCityWeatherData.wind.speed,
  };
  iconSelector(processedCityWeatherData);
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
      iconChanger(urls[4]);
    });
};

const userDemand = (e) => {
  if (e.key === "Enter" || e.type === "click") {
    if (input.value !== "") {
      if (urls[1]) {
        urls[1] = null;
      }
      urls[1] = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      getCityData();
    }
  }
};

input.addEventListener("keyup", (e) => userDemand(e));
searchButton.addEventListener("click", (e) => userDemand(e));
