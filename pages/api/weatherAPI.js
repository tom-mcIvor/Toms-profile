export function getWeatherData(city) {
  return (
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_SECRET_KEY}&q=Napier&aqi=no`
    )
      //https://api.weatherapi.com/v1/current.json?key=3dd75b46c5d54c72951144437230601&q=Napier&aqi=no
      .then((res) => res.json())
  )
}
