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
