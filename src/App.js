import './App.css';
import axios from 'axios';
import { useState } from 'react';
import bgimg from "./bg.jpg"


function App() {
  const [cityname, setCityname] = useState("");
  const [countryname, setcountryname] = useState("");
  const [Weathername, setWeathername] = useState("");
  const [Weathertemp, setWeathertemp] = useState("");
  const [Weatherfeel, setWeatherfeel] = useState("");
  const [icon, seticon] = useState("");

  function getWeather(e) {
    e.preventDefault()

    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: cityname },
      headers: {
        'X-RapidAPI-Key': '4af0c4866bmsh9e303087aa9678ap1a85cdjsn9202652b7d5e',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setWeathername(response.data.location.name);
      setcountryname(response.data.location.country);
      setWeathertemp(response.data.current.temp_c);
      setWeatherfeel(response.data.current.feelslike_c);
      seticon(response.data.current.condition.icon);
    }).catch(function (error) {
      console.error(error);
    });


  }
  return (
    <div className="App">

      <div className='main'>

        <form className="input my-5" onSubmit={getWeather}>
          <input type="text" className="form-control" placeholder='Search News' onChange={(e) => {
            setCityname(e.target.value)
          }} />
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>


        <h4 className={(countryname === "") ? "none" : "block"} > <b> Country Name: </b> {countryname}</h4>
        <h5 className={(countryname === "") ? "none" : "block"}> <b>  City Name: </b> {Weathername}</h5>
        <h5 className={(countryname === "") ? "none" : "block"}> <b> Temperature: </b> {Weathertemp}°C</h5>
        <h5 className={(countryname === "") ? "none" : "block"}> <b> Feelslike:   </b> {Weatherfeel}°C</h5>
        <img className={(countryname === "") ? "none" : "block"} src={icon} />

      </div>


    </div>
  );
}

export default App;
