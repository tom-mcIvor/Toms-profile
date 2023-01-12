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

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_TENNIS_KEY,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    }
  };

 



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    try {
      const response = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${playerName}`, options);
      const jsonData = await response.json();
      if (jsonData.results.length > 0) {
        setPlayerId(jsonData.results[0].entity.id);
        setLoading(true);
        const imageResponse = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options);
        const imageBlob = await imageResponse.blob();
        console.log(imageBlob);
        setData(imageBlob);
        console.log(data);
        setShowImage(true);
        setLoading(false);
      }
    } catch (err) {
      console.error(err)
      setLoading(true)
    }
  }

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
      {loading ? <p>loading...</p> : showImage && data && 
      <Image 
      src={URL.createObjectURL(data)} 
      alt={playerId + playerName} 
      onLoad={() => {
      setLoading(false)}}
      width={150}
      height={150} />
      }
    </Layout>
  )
}

export default Tennis;