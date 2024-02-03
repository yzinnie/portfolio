import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-main">
        <h1>
          <Link to={'/'}>J</Link>
        </h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to={'/contact'}>contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
