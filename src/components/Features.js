import React from 'react';
import '../styles/Features.css'
import hs from '../assets/icat_images/highscreenshot.png'
import ls from '../assets/icat_images/lowscreenshot.png'
const Features = () => {
    return (
      <div id="features" className="section">
        <h2>Features</h2>
        <p>Explore the unique features of our project that set us apart from the rest.</p>
        <div className="feature-list">
          <div className="feature-item">
            <img src={hs} alt="Immersive Scenarios" className="feature-icon" />
            <h3>Immersive Scenarios</h3>
            <p>Engage in realistic simulations ranging from quiet clinics to chaotic battlefields, each designed to train calmness and efficiency under pressure.</p>
          </div>
          <div className="feature-item">
            <img src={ls} alt="Interactive Training" className="feature-icon" />
            <h3>Interactive Training</h3>
            <p>Interact with an AI-driven assistant to practice and perfect the 'Stop the Bleed' procedures in a controlled virtual environment.</p>
          </div>
       
        </div>
      </div>
    );
  }
  
  export default Features;