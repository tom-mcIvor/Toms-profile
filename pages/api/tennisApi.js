export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_TENNIS_KEY,
    'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
  }
};

export async function handleImageFetch(options, playerId, setLoading, setShowImage, setData) {
  setLoading(true);
  const imageResponse = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options);
  const imageBlob = await imageResponse.blob();
  console.log(imageBlob);
  setData(imageBlob);
  setShowImage(true);
  setLoading(false);
}

export async function handlePlayerMoney(options, playerId, setPlayerPrizeMoney, setCountry) {
const details = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}`, options)
const jsonData = await details.json();
console.log(jsonData);
await setPlayerPrizeMoney(jsonData.team.playerTeamInfo.prizeTotal);
await setCountry(jsonData.team.country.name);
}

export async function fetchPlayerData(playerName, options, setPlayerId, setPlayerRank, setPlayerSlug) {
const response = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${playerName}`, options);
      const jsonData = await response.json();
      await setPlayerId(jsonData.results[0].entity.id);
      await setPlayerRank(jsonData.results[0].entity.ranking);
      await setPlayerSlug(jsonData.results[0].entity.shortName);
    }