import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Project = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <div className="Project">
      <Header />
      <div className="Project-item">
        <div>
          <h3>⛄ Weather API Project</h3>
          <h4>📆 TO-DO List Web</h4>
          <a href="https://yzinnie.github.io/JS-Project-TODO/">
            https://yzinnie.github.io/JS-Project-TODO/
          </a>
          <p>OpenWeatherMap의 API를 사용해 날씨 정보를 알려주는 투두리스트</p>
          <p>구현 기능</p>
          <ul>
            <li>
              Local storage를 활용한 to-do list 입력 및 삭제 기능 / 사용자 이름
              저장
            </li>
            <li>
              OpenWeatherMap에서 받은 현재 사용자의 city, weather 정보 출력
            </li>
            <li>현재 사용자의 시간 출력</li>
            <li>Background image의 랜덤 기능</li>
          </ul>
          <p>사용한 기술스택</p>
          <ul>
            <li>Html, Css, JavaScript</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>🧸 MY WEB</h3>
          <h4>나의 정보, 나만의 web</h4>
          <a href="https://github.com/yzinnie/React-myweb.git">
            https://github.com/yzinnie/React-myweb.git
            <br />
          </a>
          <p>React JS Project - 나의 정보 페이지</p>

          <p>구현 기능</p>
          <ul>
            <li>
              img web 구현
              <Link to={"/img"}> What i like-Trip 🏄🏻‍♀</Link>
            </li>
            <li>화면 상단이동 아이콘 생성 - Window: scrollTo() method</li>
            <li>react-router-dom 사용</li>
          </ul>
          <p>사용한 기술스택</p>
          <ul>
            <li>React</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>😎 My Diary of Emotions</h3>
          <h4>오늘 기분은 어땠어?</h4>
          <a href="https://yzinnie-react-project.firebaseapp.com/">
            https://yzinnie-react-project.firebaseapp.com/
            <br />
          </a>
          <p>React JS Project - 나의 감정 기록 일기장</p>
          <img src="../assets/emotiondiary.png" />
          <p>구현 기능</p>
          <ul>
            <li>오늘의 일기를 5가지 감정들과 함께 기록합니다.</li>
            <li> 일기 작성, 수정, 삭제 기능</li>
            <li> 일기 정렬 기능 (최신순, 감정순)</li>
            <li>react-router-dom 사용</li>
          </ul>
          <p>사용한 기술스택</p>
          <ul>
            <li>React</li>
            <li>Git</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>

      {showButton && (
        <button className="top-btn" onClick={scrollToTop}></button>
      )}
    </div>
  );
};
export default Project;
