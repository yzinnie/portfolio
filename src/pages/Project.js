import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

const Project = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Project `;
  }, []);

  return (
    <div>
      <Header />
      <div className="Project">
        <div>
          <h3> Weather API Project</h3>
          <a href="https://yzinnie.github.io/TODOLIST/">
            https://yzinnie.github.io/TODOLIST/
          </a>
          <p>OpenWeatherMap API</p>

          <ul>
            <li>Local storage</li>
            <li>OpenWeatherMap - city, weather</li>
            <li>Random Background image</li>
          </ul>
          <ul>
            <li>Html, Css, JavaScript</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>portfolio</h3>
          <a href="https://github.com/yzinnie/portfolio">
            https://github.com/yzinnie/portfolio
            <br />
          </a>
          <ul>
            <br />
            <li>
              img web
              <Link to={'/img'}> What i like-Trip </Link>
            </li>
            <li>react-router-dom </li>
          </ul>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>diary of Emotions</h3>
          <a href="https://yzinnie-react-project.web.app/">
            https://yzinnie-react-project.web.app/
          </a>
          <ul>
            <br />
            <li>A diary of today's feelings</li>
            <li> 일기 작성, 수정, 삭제 기능</li>
            <li> 일기 정렬 기능</li>
            <li>react-router-dom </li>
          </ul>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Project;
