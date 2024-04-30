import React from 'react';
import './../styles/HomePage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div id="home" className="home-section">
    <h1 className="home-title">Train to Save Lives in Real-Time VR</h1>
    <p className="home-introduction">
      Welcome to REACTS — the Realistic Emergency Aid & Collaboration Training System. 
      Developed by students at Virginia Tech’s Human-Computer Interaction Capstone, REACTS 
      leverages virtual reality to enhance the skills of medical professionals in various stressful 
      situations. Prepare to experience the next level of emergency medical training.
    </p>
    <div className="home-video">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/yourVideoId" 
        title="REACTS Overview Video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
  );
}

export default HomePage;
