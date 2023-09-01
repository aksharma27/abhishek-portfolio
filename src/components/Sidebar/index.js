import React from 'react';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logo" />
        </Link>

        <nav>
            <NavLink exact='true'  to='/' activeclassname='active'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />   
            </NavLink>
            <NavLink exact='true'  to='/about' className="about-link" activeclassname='active'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />   
            </NavLink>
            <NavLink exact='true'  to='/contact' className='contact-link' activeclassname='active'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />   
            </NavLink>
        </nav>
    </div>
  )
}

export default Sidebar;
