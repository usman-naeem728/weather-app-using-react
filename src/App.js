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
      url: 'https://busy-jade-piglet-yoke.cyclic.app/weather',
      // params: { q: cityname },
      headers: {
        'X-RapidAPI-Key': '4af0c4866bmsh9e303087aa9678ap1a85cdjsn9202652b7d5e',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      // setWeathername(response.data.location.name);
      // setcountryname(response.data.location.country);
      setWeathertemp(response.data.temp);
      setWeatherfeel(response.data.min);
      // seticon(response.data.current.condition.icon);
    }).catch(function (error) {
      console.error(error);
    });


  }
  return (
    <div className="App">

      <div className='main'>

        <form className="input my-5" onSubmit={getWeather}>
          <input type="text" className="form-control" placeholder='Search City' onChange={(e) => {
            setCityname(e.target.value)
          }} />
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>


        {/* <h4  > <b> COUNTRY NAME: </b> {countryname}</h4>
        <h5 > <b>  CITY NAME: </b> {Weathername}</h5> */}
        <h5 className={(cityname === "") ? "none" : "block"}> <b> TEMPERATURE: </b> {Weathertemp}°C</h5>
        <h5 className={(cityname === "") ? "none" : "block"}> <b> Min:   </b> {Weatherfeel}°C</h5>
        {/* <img className={(countryname === "") ? "none" : "block"} src={icon} width={50}/> */}

      </div>


    </div>
  );
}

export default App;
