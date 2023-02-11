/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const cityLocation = {};

fetch(
  "http://api.openweathermap.org/geo/1.0/direct?q=London&appid=03923b23af6d02daed9f1c90b95acfc8"
)
  .then((data) => data.json())
  .then((data) => fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${data["0"].lat}&lon=${data["0"].lon}&appid=03923b23af6d02daed9f1c90b95acfc8`
  )).then(data => {
    console.log(data.json())
    return data.json
});



// .then(data => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid={03923b23af6d02daed9f1c90b95acfc8}`)
// }).then(finalData => console.log(finalData))

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWMsT0FBTyxjQUFjO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBLG9FQUFvRSxZQUFZLE9BQU8sWUFBWSxRQUFRLGlDQUFpQztBQUM1SSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2l0eUxvY2F0aW9uID0ge307XG5cbmZldGNoKFxuICBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9TG9uZG9uJmFwcGlkPTAzOTIzYjIzYWY2ZDAyZGFlZDlmMWM5MGI5NWFjZmM4XCJcbilcbiAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2RhdGFbXCIwXCJdLmxhdH0mbG9uPSR7ZGF0YVtcIjBcIl0ubG9ufSZhcHBpZD0wMzkyM2IyM2FmNmQwMmRhZWQ5ZjFjOTBiOTVhY2ZjOGBcbiAgKSkudGhlbihkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmpzb24oKSlcbiAgICByZXR1cm4gZGF0YS5qc29uXG59KTtcblxuXG5cbi8vIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtkYXRhWzBdLmxhdH0mbG9uPSR7ZGF0YVswXS5sb259JmFwcGlkPXswMzkyM2IyM2FmNmQwMmRhZWQ5ZjFjOTBiOTVhY2ZjOH1gKVxuLy8gfSkudGhlbihmaW5hbERhdGEgPT4gY29uc29sZS5sb2coZmluYWxEYXRhKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==