import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

const AppNavBar = () => {

  const {theme, setTheme} = useContext( ThemeContext );

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li>
          <button className='submit-btn' onClick={() => setTheme('light')} disabled={theme === 'light'}>
            Light Mode
          </button>
        </li>
        <li>
          <button className='submit-btn' onClick={() => setTheme('dark')} disabled={theme === 'dark'}>
            Dark Mode
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default AppNavBar;
