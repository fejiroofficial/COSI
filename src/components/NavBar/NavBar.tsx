import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/images/logo.svg';
import aero from '../../assets/images/planeIcon.svg';


type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className='NavContainer'>
      <Link to='/'>
        <img className='Logo' src={logo} alt='cosi' />
      </Link>
      <img src={aero} alt='aeroplane' />
    </div>
  )
}

export default NavBar;
