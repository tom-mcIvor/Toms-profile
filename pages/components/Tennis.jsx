import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

const Tennis = () => {
  const [data, setData] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerRank, setPlayerRank] = useState('');
  const [playerSlug, setPlayerSlug] = useState('');
  const [playerPrizeMoney, setPlayerPrizeMoney] = useState('');
  const [country, setCountry] = useState('');



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_TENNIS_KEY,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    }
  };

  async function handleSubmit (e) {
    e.preventDefault();
    setLoading(false);
    try {
      const response = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${playerName}`, options);
      const jsonData = await response.json();
      await setPlayerId(jsonData.results[0].entity.id);
      await setPlayerRank(jsonData.results[0].entity.ranking);
      await setPlayerSlug(jsonData.results[0].entity.shortName);
    } catch (err) {
      console.error(err)
      setLoading(true)
    }
  }

  async function handleImageFetch() {
    setLoading(true);
    const imageResponse = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options);
    const imageBlob = await imageResponse.blob();
    console.log(imageBlob);
    setData(imageBlob);
    setShowImage(true);
    setLoading(false);
  }

  async function handlePlayerMoney() {
  const details = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}`, options)
  const jsonData = await details.json();
  console.log(jsonData);
  await setPlayerPrizeMoney(jsonData.team.playerTeamInfo.prizeTotal);
  await setCountry(jsonData.team.country.name);
  }


  useEffect(() => {
    if (playerId) {
      console.log(playerId);
      handleImageFetch();
      handlePlayerMoney()
    }
  }, [playerId])

  return (
    <Layout>
      <Box onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div id='tennis-form'>
          <TextField
            label="Search Player"
            variant="outlined"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >Submit</Button>
      </Box>
      {loading ? <p>loading...</p> : playerId && showImage && data &&
        <Image
          src={URL.createObjectURL(data)}
          alt={playerId + playerName}
          onLoad={() => {
            setLoading(false)
          }}
          width={150}
          height={150} />
      }


     {showImage && !loading &&(
  <div className="details">
    <pre>
      <p>{playerSlug}</p>
     
      <br />
      rank: {playerRank}
      <br />
      Prize money (EUR): ${playerPrizeMoney.toLocaleString()}
      <br />
      country: {country}
    </pre>
  </div>
)}
    </Layout>
  )
}

export default Tennis;