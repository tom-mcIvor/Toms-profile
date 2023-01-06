import { useState, useEffect } from 'react';

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
        <h1>Weather in Napier:</h1>
        <p>Temperature: {weatherData.current.temp_c}</p>
        <p>Humidity: {weatherData.current.wind_kph}</p>
      </div>
    );
  }
}

export default Weather;