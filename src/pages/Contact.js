import Header from '../components/Header';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Contact `;
  }, []);

  return (
    <div className="Contact">
      <Header />
      <h4>Contact</h4>
      <p>
        Email & iMessage <br /> yyjh222@gmail.com
      </p>
      <p>
        Github <br />
        <a href="https://github.com/yzinnie">github/yzinnie</a>
      </p>
    </div>
  );
};
export default Contact;
