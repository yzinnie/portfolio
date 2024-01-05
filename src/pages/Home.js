import Header from "../components/Header";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Home | JIHYUN YOON `;
  }, []);

  return (
    <div className="Home">
      <Header />
      <TypeAnimation
        sequence={[
          "내가 꿈꾸는 것은 함께 사는 세상",
          1000,
          "내가 꿈꾸는 것은 지구의 행복",
          1000,
          "내가 꿈꾸는 것은 당신의 평화",
          1000,
          "We are all calm and peaceful just by our existence.",
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
