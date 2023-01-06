





const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

// Replace YOUR_API_KEY with your actual API key
const apiKey = '3dd75b46c5d54c72951144437230601';

app.get('/weather', (req, res) => {
  // Send a request to the weather API
  request(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Napier&aqi=no`,
    (error, response, body) => {
      if (error) {
        // Return an error if there is a problem with the request
        res.send({ error });
      } else {
        // Parse the response and return the desired data
        const weatherData = JSON.parse(body);
        res.send({
          temperature: weatherData.observations.temp,
          humidity: weatherData.observations.rh,
          windSpeed: weatherData.observations.wspd,
        });
      }
    }
  );
});

app.listen(port, () => console.log(`App listening on port ${port}!`));








