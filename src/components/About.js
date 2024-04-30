import React from 'react';
import '../styles/About.css'; // Optional CSS file for specific styling of the About section

const About = () => {
    return (
      <div id="about" className="section">
        <div className="about-section">
          <h2>About REACTS</h2>
          <p className="about-description">
            The Realistic Emergency Aid & Collaboration Training System (REACTS) is a pioneering virtual reality platform 
            designed to enhance the preparedness of medical professionals in high-pressure environments. Developed as part 
            of the Human-Computer Interaction Capstone at Virginia Tech, REACTS uses the immersive power of virtual reality 
            to simulate a range of medical emergency scenarios. From a tranquil skate park to a chaotic battlefield, REACTS 
            prepares users to remain calm and effective in any situation.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Team</h3>
          <p className="about-team">
            Our team consists of dedicated students from diverse academic backgrounds, including Computer Science, 
            Neuroscience, Psychology, and Business Information Technology. Each member brings a unique perspective 
            and expertise, contributing to the innovative and interdisciplinary nature of REACTS.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Mission</h3>
          <p className="about-mission">
            We aim to revolutionize the training of medical professionals by providing an adaptive training environment 
            where they can experience and master the complexities of real-life medical emergencies in a controlled, 
            immersive setting. Our ultimate goal is to increase the confidence and competence of healthcare workers, 
            thereby improving patient outcomes in critical situations.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;