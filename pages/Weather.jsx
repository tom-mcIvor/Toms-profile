import { useState, useEffect } from 'react';
import Link from 'next/link';


const apikey = process.env.NEXT_PUBLIC_SECRET_KEY

              //              API_KEY 
              //  process.env.NEXT_PUBLIC_SOMETHING




function Weather(props) {
  const [weatherData, setWeatherData] = useState([{}]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=Napier&aqi=no`)
      .then(res => res.json(console.log(res))
      )
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
      <div>
        <Link href="/"><h1>Home</h1></Link>

        <div id='weather-container'>
          <h1>Weather in Napier:</h1>
          <p>Temperature (°C): {weatherData.current.temp_c}</p>
          <p>Wind (kph): {weatherData.current.wind_kph}</p>
        </div>
      </div>
    );
  }
}

export default Weather;