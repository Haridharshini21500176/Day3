
import React from 'react';
import './Home.css';
import heroImage from '../assets/IMG.jpg';

const Home = () => {
  return (
    <div className="home">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Saveetha Engineering College</h1>
        <p>Welcome to our college</p>
      </div>
    </div>
  );
};

export default Home;
