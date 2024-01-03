import { Link } from "react-router-dom";
import Header from "../components/Header";

const Info = () => {
  return (
    <div className="Info">
      <Header />
      <div className="Info-content">
        <div>
          <h4>My info</h4>
          <ul>
            <li>Name : 윤지현 (Jihyun Yoon)</li>
            <li>Birth : 1999. 02. 22 🐰</li>
            <li>Major: Computer Software</li>
            <li>Tech Stack : Html, CSS, JavaScript, React</li>
            <li>Use Tool : VisualStudioCode, Git, Github, Figma, Bootstrap</li>
          </ul>
        </div>
        <div className="Info-link">
          <h4>What i like</h4>
          <ul>
            <li>
              Trip 🏄🏻‍♀
              <Link to={"/img"}> 여행하며 찍었던 사진들</Link>
            </li>
            <li>COFFEE ☕</li>
            <li>
              Our Earth 🌍
              <a href="https://www.figma.com/file/HXwuEztiFI2R5wGor640ul/OH-RECYCLE?type=design&mode=design&t=haQGUcDwPNu3eLFs-1">
                지구를 사랑하는 마음을 담아 대학시절 기획했던 앱 프로젝트
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Info;
