import Header from '../components/Header';
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Home | JIHYUN YOON `;
  }, []);

  return (
    <div className="Home">
      <Header />
      <TypeAnimation
        sequence={[
          'We are all calm and peaceful just by our existence. ',
          1000,
        ]}
        speed={50}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
};
export default Home;
