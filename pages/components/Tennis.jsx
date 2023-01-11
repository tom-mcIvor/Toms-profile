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

  const options = {
    method: 'GET',
    headers: {          
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_TENNIS_KEY,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options)
        .then(response => response.blob())
        .then(response => { console.log(response); setData(response) })
        .catch(err => console.error(err));
    

  }, [playerId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`, options)
        .then(response => response.blob())
        .then(response => { console.log(response); setData(response) })
        .catch(err => console.error(err));
        e => setPlayerId(e.target.value)
        setShowImage(true)
  }

  return (
    <Layout>
    <div>
    <TextField label="Search Player" variant="outlined" value={playerId} onChange={e => setPlayerId(e.target.value)} />
      { showImage && data && <img src={URL.createObjectURL(data)} alt={data.alt} />}
      <br />
      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Submit</Button>
    </div>
    </Layout>
  );
}

export default Tennis;