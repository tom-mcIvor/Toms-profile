import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';


const Tennis = () => {
  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6089442d10msh761447d6ab1388cp1bf39ejsn9308ea310980',
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    }
  };

  useEffect(() => {

    fetch('https://tennisapi1.p.rapidapi.com/api/tennis/player/14486/image', options)
      .then(response => response.blob())
      .then(response => { console.log(response); setData(response) })
      .catch(err => console.error(err));

  }, []);

  return (
    <Layout>
    <div>
      {data && <img src={URL.createObjectURL(data)} alt={data.alt} />}
    </div>
    </Layout>
  );
}

export default Tennis;