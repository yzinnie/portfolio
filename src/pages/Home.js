import Header from '../components/Header';
import React, { useEffect } from 'react';
import Info from '../components/Info';

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Home | JIHYUN YOON `;
  }, []);

  return (
    <div className="Home">
      <Header />
      <Info />
    </div>
  );
};
export default Home;
