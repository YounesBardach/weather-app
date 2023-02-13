/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNLDRDQUE0QztBQUNsRCxNQUFNLGtEQUFrRDtBQUN4RCxNQUFNLCtDQUErQztBQUNyRCxNQUFNLHVEQUF1RDtBQUM3RCxNQUFNLDJDQUEyQztBQUNqRCxNQUFNLCtDQUErQztBQUNyRCxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLDZDQUE2QztBQUNuRCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLHlDQUF5QztBQUMvQyxNQUFNLDRDQUE0QztBQUNsRCxNQUFNLGtEQUFrRDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsc0JBQXNCLE9BQU8sc0JBQXNCO0FBQzFIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFlBQVk7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGllbnQtaW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIik7XG5jb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGljYXRvclwiKTtcbmNvbnN0IHVybHMgPSBbXG4gIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy82MDM2cDBjVG5qVXJORnBBbHI/YXBpX2tleT1JTTZFVFEzQ2xsVUJ1cXNTeVFpSURpZUpuQjJMWFVDQ2AsXG5dO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuY29uc3QgY2hhbmdlciA9IChyYXdEYXRhKSA9PiB7XG4gIGluZGljYXRvci5zcmMgPSByYXdEYXRhLmRhdGEuaW1hZ2VzLmRvd25zaXplZC51cmw7XG59O1xuXG5jb25zdCBpY29uQ2hhbmdlciA9ICh1cmwpID0+IHtcbiAgZmV0Y2hlcih1cmwpLnRoZW4oKHJhd0RhdGEpID0+IHtcbiAgICBjaGFuZ2VyKHJhd0RhdGEpO1xuICB9KTtcbn07XG5cbmNvbnN0IGljb25TZWxlY3RvciA9IChwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEpID0+IHtcbiAgY29uc29sZS5sb2cocHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhKTtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gW1xuICAgIHsgZGVzY3JpcHRpb246IFwiQ2xlYXJcIiwgaWQ6IFwibG9VcUNNU2ZYSGNzVmIzY1VaXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIkNsb3Vkc1wiLCBpZDogXCJjMzFXWEdLMWpMUUJ5XCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIkRyaXp6bGVcIiwgaWQ6IFwiM29FZHZiZWxUbU1YT1E5VkRPXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIlJhaW5cIiwgaWQ6IFwidDdRYjg2NTVaMVZmQkdyNVhCXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIlRodW5kZXJzdG9ybVwiLCBpZDogXCIzb3N4WXpJUVJxTjRET0VkZENcIiB9LFxuICAgIHsgZGVzY3JpcHRpb246IFwiU25vd1wiLCBpZDogXCIxMnd0ZU1UWHhqTGFWT1wiIH0sXG4gICAgeyBkZXNjcmlwdGlvbjogXCJNaXN0XCIsIGlkOiBcInNabXY4NXBaOE5HNjBIVTlRS1wiIH0sXG4gICAgeyBkZXNjcmlwdGlvbjogXCJTbW9rZVwiLCBpZDogXCJyMk9NdVRDRm8wcnYycmdBTDVcIiB9LFxuICAgIHsgZGVzY3JpcHRpb246IFwiSGF6ZVwiLCBpZDogXCJkZ2VJSDVSUHluQTZRXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIkR1c3RcIiwgaWQ6IFwidHF0WkRqNUJxQzBDWVwiIH0sXG4gICAgeyBkZXNjcmlwdGlvbjogXCJGb2dcIiwgaWQ6IFwibDJKZTlkVUk1THB6ZkhHVGVcIiB9LFxuICAgIHsgZGVzY3JpcHRpb246IFwiU2FuZFwiLCBpZDogXCJCWFBsTXJPOWN5WVRLXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIkFzaFwiLCBpZDogXCJyNWdIdDJUQ0lpSEswXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIlNxdWFsbFwiLCBpZDogXCJIbVRMYXR3TFdwVFFrXCIgfSxcbiAgICB7IGRlc2NyaXB0aW9uOiBcIlRvcm5hZG9cIiwgaWQ6IFwiTVh2RGhsbUQwZUI1cU52dmpaXCIgfSxcbiAgXTtcbiAgY29uc3QgaWNvbklkID1cbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25bXG4gICAgICB3ZWF0aGVyRGVzY3JpcHRpb24uZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5kZXNjcmlwdGlvbiA9PT0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLndlYXRoZXJcbiAgICAgIClcbiAgICBdLmlkO1xuICB1cmxzWzNdID0gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWNvbklkfT9hcGlfa2V5PUlNNkVUUTNDbGxVQnVxc1N5UWlJRGllSm5CMkxYVUNDYDtcbiAgaWNvbkNoYW5nZXIodXJsc1szXSk7XG59O1xuXG5jb25zdCBwcm9jZXNzQ2l0eURhdGEgPSAocmF3Q2l0eVdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJhd0NpdHlXZWF0aGVyRGF0YSk7XG4gIGNvbnN0IHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YSA9IHtcbiAgICBjaXR5OiByYXdDaXR5V2VhdGhlckRhdGEubmFtZSxcbiAgICB0ZW1wZXJhdHVyZTogcmF3Q2l0eVdlYXRoZXJEYXRhLm1haW4udGVtcCxcbiAgICB3ZWF0aGVyOiByYXdDaXR5V2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLFxuICAgIGRheVRlbXA6IHJhd0NpdHlXZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4LFxuICAgIG5pZ2h0VGVtcDogcmF3Q2l0eVdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4sXG4gICAgaHVtaWRpdHk6IHJhd0NpdHlXZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IHJhd0NpdHlXZWF0aGVyRGF0YS53aW5kLnNwZWVkLFxuICB9O1xuICBpY29uU2VsZWN0b3IocHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhKTtcbn07XG5cbmNvbnN0IGdldENpdHlEYXRhID0gKCkgPT4ge1xuICBQcm9taXNlLnJlc29sdmUoaWNvbkNoYW5nZXIodXJsc1swXSkpXG4gICAgLnRoZW4oKCkgPT4gZmV0Y2hlcih1cmxzWzFdKSlcbiAgICAudGhlbigoY2l0eU5hbWVEYXRhKSA9PiB7XG4gICAgICB1cmxzWzJdID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2NpdHlOYW1lRGF0YVtcIjBcIl0ubGF0fSZsb249JHtjaXR5TmFtZURhdGFbXCIwXCJdLmxvbn0mYXBwaWQ9MDM5MjNiMjNhZjZkMDJkYWVkOWYxYzkwYjk1YWNmYzhgO1xuICAgICAgcmV0dXJuIGZldGNoZXIodXJsc1syXSk7XG4gICAgfSlcbiAgICAudGhlbigocmF3Q2l0eVdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICBwcm9jZXNzQ2l0eURhdGEocmF3Q2l0eVdlYXRoZXJEYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHVybHNbNF0gPSBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvOEwwUGt5NkM4M1N6a3pVNTVhP2FwaV9rZXk9SU02RVRRM0NsbFVCdXFzU3lRaUlEaWVKbkIyTFhVQ0NgO1xuICAgICAgaWNvbkNoYW5nZXIodXJsc1s0XSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCB1c2VyRGVtYW5kID0gKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGlmICh1cmxzWzFdKSB7XG4gICAgICAgIHVybHNbMV0gPSBudWxsO1xuICAgICAgfVxuICAgICAgdXJsc1sxXSA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7aW5wdXQudmFsdWV9JmFwcGlkPTAzOTIzYjIzYWY2ZDAyZGFlZDlmMWM5MGI5NWFjZmM4YDtcbiAgICAgIGdldENpdHlEYXRhKCk7XG4gICAgfVxuICB9XG59O1xuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHVzZXJEZW1hbmQoZSkpO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdXNlckRlbWFuZChlKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=