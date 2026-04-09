import Image from 'next/image';
import React from 'react';
import shoaib from '../../assets/image/shubu.jpg' 
export const metadata = {
  title: 'About',
  description: 'About section are here'
}

const AboutPage = () => {
  return (
    <div>
      <h2 className='text-6xl font-bold'>This is About Page</h2>
      <Image width='500' height='300' src='https://i.ibb.co.com/trx2j5Q/rashid-khan.jpg' alt='tamim'></Image>
     
      <Image width='500' height='300' src='https://plus.unsplash.com/premium_photo-1775446842961-c8ba3264b23a' alt='mediPic' ></Image>
      <Image width='500' height='300' src='/shoaib.jpeg' alt='donPic' ></Image>
      <Image width='500' height='300' src={shoaib} alt='shoaibBhai'></Image>
    </div>
  );
};

export default AboutPage;