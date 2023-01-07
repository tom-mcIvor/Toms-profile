import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getWeatherData } from './api/weatherAPI'


function Weather(props) {
  const [weatherData, setWeatherData] = useState([{}]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    getWeatherData(props.city)
      .then(
        (result) => {
          setIsLoaded(true);
          setWeatherData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [props.city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Layout>
        <div>
          <div id='weather-container'>
            <h1>Weather in Napier:</h1>
            <p>Temperature (°C): {weatherData.current.temp_c}</p>
            <p>Wind (kph): {weatherData.current.wind_kph}</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Weather;