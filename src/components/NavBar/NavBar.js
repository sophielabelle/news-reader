import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () =>  {
  const location =  useLocation();
  const homeButton = location.pathname !== '/' ? <button className="nav-btn">Home</button> : null;

  return (
    <div className="nav-bar">
      <Link to='/'>
        <h1>Your Favorite Local News</h1>
      </Link>
      <Link to='/'>
        {homeButton}
      </Link>
    </div>
  );
}