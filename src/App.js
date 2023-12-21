import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forcast from "./components/forecast/forecast";

function App() {
  const [weather, setCurrentWeather] = useState(null);
  const [forcast, setForecast] = useState(null);
  const onhandleSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forcastfetch = fetch(
      `${WEATHER_API}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forcastfetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();
      setCurrentWeather({city:searchData.label,...weatherResponse})
      setForecast({city:searchData.label,...forcastResponse})
    }).catch((err)=>console.log(err));

    console.log("haha",weather)
    console.log(forcast)
  };
  return (
    <div className="container">
      <Search onSearchChange={onhandleSearchChange} />
      {weather && <CurrentWeather data={weather}/>}
      {forcast &&<Forcast data={forcast}/>}
     
    </div>
  );
}

export default App;
