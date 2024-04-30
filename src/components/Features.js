import React from 'react';
import '../styles/Features.css'
const Features = () => {
    return (
      <div id="features" className="section">
        <h2>Features</h2>
        <p>Explore the unique features of our project that set us apart from the rest.</p>
        <div className="feature-list">
          <div className="feature-item">
            <img src="/path/to/immersive-icon.png" alt="Immersive Scenarios" className="feature-icon" />
            <h3>Immersive Scenarios</h3>
            <p>Engage in realistic simulations ranging from quiet clinics to chaotic battlefields, each designed to train calmness and efficiency under pressure.</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/interactive-icon.png" alt="Interactive Training" className="feature-icon" />
            <h3>Interactive Training</h3>
            <p>Interact with an AI-driven assistant to practice and perfect the 'Stop the Bleed' procedures in a controlled virtual environment.</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/feedback-icon.png" alt="Real-Time Feedback" className="feature-icon" />
            <h3>Real-Time Feedback</h3>
            <p>Receive immediate feedback on your actions to refine your skills continuously, preparing you for real-world medical emergencies.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Features;