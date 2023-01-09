const fetch = require('node-fetch')
const request = require('superagent')
const express = require('express')
const router = express.Router()
const apiKey = process.env.NEXT_PUBLIC_TENNIS_KEY

router.get('/:playername', (req, res) => {
  const playername = req.params.playername

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': NEXT_PUBLIC_TENNIS_KEY,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
    },
  }
  return fetch(
    `https://tennisapi1.p.rapidapi.com/api/tennis/search/${playername}`, options
  )
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
      return res.json(data)
    })
    .catch((err) => console.error(err))
})

router.get('/id/:playerId', (req, res) => {
  const playerId = req.params.playerId

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
    },
  }
  return fetch(
    `https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}`,
    options
  )
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
      return res.json(data)
    })
    .catch((err) => console.error(err))
})


router.get('/rankings/:tour', (req, res) => {
  const tour = req.params.tour
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
    },
  }
  return fetch(
    `https://tennisapi1.p.rapidapi.com/api/tennis/rankings/${tour}`,
    options
  )
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
      return res.json(data)
    })
    .catch((err) => console.error(err))
})

router.get('/image/:id', (req, res) => {
  const playerid = req.params.id

  request
    .get(
      `https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerid}/image`
    )
    .set({
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
    })
    .then((response) => {
      // F4 F3 A3 43 F4
      const buffer = new Buffer.from(response.body).toString('base64')
      res.json(buffer)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router