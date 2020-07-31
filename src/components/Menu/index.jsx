import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Home" />
      </Link>

      <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
        Novo v&iacute;deo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
