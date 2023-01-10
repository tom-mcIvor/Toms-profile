import request from 'superagent'

function randInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

export function fetchRandomPlayer(fromRankings = true) {
  if (fromRankings) {
    let isWta = Math.random() < 0.5
    return fetchRankings(isWta).then((rankedPlayers) => {
      var playerRank = randInt(1, Math.min(rankedPlayers.rankings.length, 500))
      // The API is a bit funny here- for some reason the player appears under `.team`
      let entity = rankedPlayers.rankings[playerRank].team
      return {
        id: entity.id,
        name: entity.name,
      }
    })
  } else {
    // Player ids seem to be "gappy"- a lot of player ids return an empty payload :(
    let playerId
    playerId = randInt(1000, 1500)
    return request.get(`/api/v1/tennis/id/${playerId}`).then((res) => {
      let entity = res.body
      return {
        id: entity.id,
        name: entity.name,
      }
    })
  }
}

export function fetchRankings(wta = false) {
  var tour = wta ? 'wta' : 'atp'
  console.log(`/api/v1/tennis/rankings/${tour}`)
  return request.get(`/api/v1/tennis/rankings/${tour}`).then((res) => res.body)
}

export function fetchTennisPlayer(playername) {
  if (playername === '') {
    return fetchRandomPlayer()
  }
  console.log(`/api/v1/tennis/${playername}`)
  // Search for the player and return the first entry
  return request.get(`/api/v1/tennis/${playername}`).then((res) => {
    let entity = res.body.results[0].entity
    return {
      id: entity.id,
      name: entity.name,
    }
  })
}

export function fetchTennisImage(id) {
  return request.get(`/api/v1/tennis/image/${id}`).then((res) => {
    const image = 'data:image/jpeg;base64, ' + res.body
    return image
  })
}

export async function fetchTennisImageByPlayer(playerName) {
  const playerIdResponse = await request.get(`/api/v1/tennis/${playerName}`)
  const firstPlayerId = playerIdResponse.body.results[0].entity.id
  const imageResponse = await request.get(
    `/api/v1/tennis/image/${firstPlayerId}`
  )
  const image = `data:image/jpeg;base64, ${imageResponse.body}`
  return image
}

export function fetchttennispplayer(playername) {
  return request
      .get(`/api/v1/tennis/${playername}`)
      .then(res => res.body)
}