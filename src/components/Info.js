import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const styles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Info">
      <div>
        <ul>
          <li>portfolio</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <br />
            (. ❛ ᴗ ❛.) i loveee dog
            <br />
            <a href="https://san-check.web.app/">URL ---- °* san-check</a>
            <br />
            API
            <br />
            kakao <br /> airkorea <br />
            openweathermap
            <br />
            javascript
            <br />
            react
            <br />
            npm
            <br />
            <a href="https://github.com/yzinnie/SAN-CHECK">github</a>
            <br />
            <p style={isOpen ? null : styles}>
              프로젝트설명 <br />
              프로젝트설명프로젝트설명프로젝트설명프로젝트설명 <br />
              프로젝트 설명프로젝트설명프로젝트설명 <br />
              프로젝트설명프로젝트설명프로젝트설명 <br />
              프로젝트설명프로젝 <br />
              트설명프로젝트설명프로젝트설명
            </p>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'close' : 'read more'}
            </button>
          </li>
        </ul>
      </div>
      <div>
        {' '}
        <ul>
          <li>
            <br />
            How do you feel today
            <br />
            <a href="https://yzinnie-react-project.web.app/">
              URL ---- °* emotion diary
            </a>
            <br />
            localstorage
            <br />
            <a href="https://github.com/yzinnie/Diary-Of-Emotions">github</a>
            <br />
            javascript
            <br />
            react
            <br />
            npm
          </li>
        </ul>
      </div>
      <div>
        {' '}
        <ul>
          <li>
            <br />
            to do list on your dashboard ⁕
            <br />
            <a href="https://yzinnie.github.io/TODOLIST/">
              URL ---- °* todo: write a to-do
            </a>
            <br />
            localstorage
            <br />
            <a href="https://github.com/yzinnie/TODOLIST">github</a>
            <br />
            javascript
            <br />
            openweathermap API
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            For Our Earth
            <br />
            <a href="https://www.figma.com/file/HXwuEztiFI2R5wGor640ul/OH-RECYCLE?type=design&node-id=0%3A1&mode=design&t=tcaLsjj0rkUtao9o-1">
              figma project
            </a>
          </li>
          <li>
            portfolio
            <br />
            <a href="https://portfolio-jj.web.app/">This page</a>
            <br />
            <a href="https://github.com/yzinnie/portfolio">github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Info;
