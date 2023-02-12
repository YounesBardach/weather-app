/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const input = document.querySelector(".client-input");
const searchButton = document.querySelector(".search-button");
const loaderContainer = document.querySelector(".loader-img");

const loader = () => {
  fetch(
    `https://api.giphy.com/v1/gifs/6036p0cTnjUrNFpAlr?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data.data.images);
      loaderContainer.src = data.data.images.downsized.url;
    });
};

const processCItyData = (data) => {
  const processedData = {
    city: data.name,
    temperature: data.main.temp,
    weather: data.weather[0].description,
    dayTemp: data.main.temp_max,
    nightTemp: data.main.temp_min,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };
  console.log(processedData);
  loaderContainer.src = '';
};

const getCityData = () => {
  loader();
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=03923b23af6d02daed9f1c90b95acfc8`
  )
    .then((data) => data.json())
    .then((data) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data["0"].lat}&lon=${data["0"].lon}&appid=03923b23af6d02daed9f1c90b95acfc8`
      )
    )
    .then((data) => data.json())
    .then((data) => {
      processCItyData(data);
    });
};

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getCityData();
  }
});

searchButton.addEventListener("click", () => getCityData());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsWUFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxjQUFjLE9BQU8sY0FBYztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGllbnQtaW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIik7XG5jb25zdCBsb2FkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlci1pbWdcIik7XG5cbmNvbnN0IGxvYWRlciA9ICgpID0+IHtcbiAgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLzYwMzZwMGNUbmpVck5GcEFscj9hcGlfa2V5PUlNNkVUUTNDbGxVQnVxc1N5UWlJRGllSm5CMkxYVUNDYFxuICApXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEuaW1hZ2VzKTtcbiAgICAgIGxvYWRlckNvbnRhaW5lci5zcmMgPSBkYXRhLmRhdGEuaW1hZ2VzLmRvd25zaXplZC51cmw7XG4gICAgfSk7XG59O1xuXG5jb25zdCBwcm9jZXNzQ0l0eURhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBwcm9jZXNzZWREYXRhID0ge1xuICAgIGNpdHk6IGRhdGEubmFtZSxcbiAgICB0ZW1wZXJhdHVyZTogZGF0YS5tYWluLnRlbXAsXG4gICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIGRheVRlbXA6IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICBuaWdodFRlbXA6IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgfTtcbiAgY29uc29sZS5sb2cocHJvY2Vzc2VkRGF0YSk7XG4gIGxvYWRlckNvbnRhaW5lci5zcmMgPSAnJztcbn07XG5cbmNvbnN0IGdldENpdHlEYXRhID0gKCkgPT4ge1xuICBsb2FkZXIoKTtcbiAgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtpbnB1dC52YWx1ZX0mYXBwaWQ9MDM5MjNiMjNhZjZkMDJkYWVkOWYxYzkwYjk1YWNmYzhgXG4gIClcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2RhdGFbXCIwXCJdLmxhdH0mbG9uPSR7ZGF0YVtcIjBcIl0ubG9ufSZhcHBpZD0wMzkyM2IyM2FmNmQwMmRhZWQ5ZjFjOTBiOTVhY2ZjOGBcbiAgICAgIClcbiAgICApXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwcm9jZXNzQ0l0eURhdGEoZGF0YSk7XG4gICAgfSk7XG59O1xuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBnZXRDaXR5RGF0YSgpO1xuICB9XG59KTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBnZXRDaXR5RGF0YSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==