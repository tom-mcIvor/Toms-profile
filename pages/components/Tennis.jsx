import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import { options, handleImageFetch, handlePlayerMoney, fetchPlayerData } from '../api/tennisApi'

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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(false);
    try {
      fetchPlayerData(playerName, options, setPlayerId, setPlayerRank, setPlayerSlug)
    } catch (err) {
      console.error(err)
      setLoading(true)
    }
  }

  useEffect(() => {
    if (playerId) {
      console.log(playerId);
      handleImageFetch(options, playerId, setLoading, setShowImage, setData);
      handlePlayerMoney(options, playerId, setPlayerPrizeMoney, setCountry)
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

      {showImage && !loading && (
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