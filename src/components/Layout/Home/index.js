import React from 'react';
import LogoTitle from '../../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';


const Home = () => {
  return (
    <div className='home-page'>
      <div className="text-zone">
        <h1>Hi,  <br /> I'm 
        <img src={LogoTitle}  alt="developer" />
        Abhishek
        <br />
        Full Stack Developer
        </h1>

        <h2>Full Stack Developer / Aspiring Software Engineer / YouTuber / Cricketer</h2>

        <Link to='/contact' className='flat-button'>Contact Me</Link>
      </div>
    </div>
  )
}

export default Home
