import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux'

const Tennis = () => {
  const [data, setData] = useState(null);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(false);

  // fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${playerName}`, options)
  // .then(response => response.json())
  // .then(response => {
  //   setPlayerId(response.results[0].entity.id)
  //   setLoading(false);
  //     })
  // .catch(err => console.error(err));

  // fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options)
  //   .then(response => { 
  //     return (response.blob())
  //     })
  //   .then(response => {
  //     if (!response) {
  //       setLoading(true);
  //   }
  //     setData(response)
  //     setShowImage(true)
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     setLoading(true);
  //   });

  //     // e.preventDefault();
  //     // setLoading(false);

  //     // fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${playerName}`, options)
  //     // .then(response => response.json())
  //     // .then(response => {
  //     //   setPlayerId(response.results[0].entity.id)
  //     //   setLoading(false);

  //     // return(

  //     // fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options)
  //     //   .then(response => { 
  //     //     return (response.blob())
  //     //     })
  //     //   .then(response => {
  //     //     if (!response) {
  //     //       setLoading(true);
  //     //   }
  //     //     setData(response)
  //     //     setShowImage(true)
  //     //   })
  //     //   .catch(error => {
  //     //     console.error(error);
  //     //     setLoading(true);
  //     //   })
  //     //   )
  //     // })
  // }


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
        setData(imageBlob);
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
      {loading ? <p>loading...</p> : showImage && data && <img src={URL.createObjectURL(data)} alt={data.alt} onLoad={() => setLoading(false)} />}
    </Layout>
  )
}

export default Tennis;