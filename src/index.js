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
