import Header from "../components/Header";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Home | JIHYUN YOON `;
  }, []);

  return (
    <div className="Home">
      <Header />
    </div>
  );
};
export default Home;
