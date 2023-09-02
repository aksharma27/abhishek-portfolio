import React from 'react';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faFile, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

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

        <ul>
            <li>
                <a target='_blank' rel="noreferrer"  href='https://www.linkedin.com/in/abhishek27crj/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d5e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer"  href='https://www.github.com/aksharma27/'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d5e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" title='Resume'  href='https://drive.google.com/file/d/1Da34EnzCnthoijRcw0Unt1yEqi4wrkVE/view?usp=sharing'>
                    <FontAwesomeIcon icon={faFile} color='#4d4d5e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer"  href='https://twitter.com/abhishekcrj'>
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d5e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer"  href='https://www.youtube.com/channel/UCVi-wKNAX-D4fEFG0w5rVBA'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d5e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer"  href='https://wa.me/+919142998113'>
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d5e'/>
                </a>
            </li>
            
        </ul>
    </div>
  )
}

export default Sidebar;
