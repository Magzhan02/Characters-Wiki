import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

function Header() {
  const [active, setActive] = React.useState('Character');

  return (
    <div className={style.header}>
      <div className={style.logo}>The Rick and Morty Wiki</div>
      <nav className={style.navbar}>
        <ul onClick={(e) => setActive(e.target.textContent)}>
          <Link to="/">
            <li className={active === 'Character' ? style.active : ''}>Character</li>
          </Link>
          <Link to="/episode">
            <li className={active === 'Episode' ? style.active : ''}>Episode</li>
          </Link>
          <Link to="/location">
            <li className={active === 'Location' ? style.active : ''}>Location</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
