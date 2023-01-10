









export function getWeatherData(city) {
  return fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_SECRET_KEY}&q=Napier&aqi=no`)
    .then(res => res.json())
}
