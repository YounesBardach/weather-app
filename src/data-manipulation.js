export const fetcher = (url) => fetch(url).then((response) => response.json());

export const urls = [
  `https://api.giphy.com/v1/gifs/6036p0cTnjUrNFpAlr?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`,
];

export const processCityData = (rawCityWeatherData) => {
  const processedCityWeatherData = {};
  if (rawCityWeatherData === null) {
    processedCityWeatherData.city = `Couldn't find that city in our database`;
    processedCityWeatherData.temperature = `No data`;
    processedCityWeatherData.weather = `No data`;
    processedCityWeatherData.dayTemp = `No data`;
    processedCityWeatherData.nightTemp = `No data`;
    processedCityWeatherData.humidity = `No data`;
    processedCityWeatherData.wind = `No data`;
  } else {
    processedCityWeatherData.city = rawCityWeatherData.name;
    processedCityWeatherData.temperature = `${rawCityWeatherData.main.temp} K`;
    processedCityWeatherData.weather = rawCityWeatherData.weather[0].main;
    processedCityWeatherData.dayTemp = `Day ${rawCityWeatherData.main.temp_max} K`;
    processedCityWeatherData.nightTemp = `Night ${rawCityWeatherData.main.temp_min} K`;
    processedCityWeatherData.humidity = `${rawCityWeatherData.main.humidity} %`;
    processedCityWeatherData.wind = `${rawCityWeatherData.wind.speed} m/s`;
  }
  return processedCityWeatherData;
};

export const getCityData = (url) =>
  fetcher(url)
    .then((cityNameData) => {
      urls[2] = `https://api.openweathermap.org/data/2.5/weather?lat=${cityNameData["0"].lat}&lon=${cityNameData["0"].lon}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      return fetcher(urls[2]);
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
