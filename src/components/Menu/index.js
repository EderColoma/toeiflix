import React from 'react'
import logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from '../ButtonLink'
import {Link} from 'react-router-dom'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Home"/>
            </Link>

            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video"> 
                Novo v&iacute;deo
            </ButtonLink>
        </nav>
    );
}

export default Menu;