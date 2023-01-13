import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';

const Welcome = () => {
  return (
    <>
      <Image 
      id = 'toms-image'
      src="/rfdgdfsdfsdfedrgdgd.png" 
      alt="toms image" 
      width={50}
      height={50} 
      />
      <br />
      <header>
        <h1>Toms profile</h1>
      </header>
      
    </>
  );
};

export default Welcome;

