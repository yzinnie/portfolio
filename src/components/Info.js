import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';

const Info = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = ` INFO `;
  }, []);

  return (
    <div className="Info">
      <div className="Info-content">
        <div>
          <ul>
            <li>JIHYUN YOON</li>
            <li>
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
            </li>
          </ul>
        </div>
        <div className="Info-link">
          <ul>
            <li>
              For Our Earth
              <br />
              <a href="https://www.figma.com/file/HXwuEztiFI2R5wGor640ul/OH-RECYCLE?type=design&node-id=0%3A1&mode=design&t=tcaLsjj0rkUtao9o-1">
                figma project
              </a>
            </li>
            <li>
              i loveee dog <br />
              <a href="https://san-check.web.app/">san-check</a>
              <br />
              <a href="https://github.com/yzinnie/SAN-CHECK">github</a>
            </li>
            <li>
              portfolio
              <br />
              <a href="https://yzinnie-react.web.app/">This page</a>
              <br />
              <a href="https://github.com/yzinnie/portfolio">github</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Info-molla">
        <ul>
          <li>
            <br />
            <a href="https://yzinnie-react.web.app/">(. ❛ ᴗ ❛.)</a>
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Info;
