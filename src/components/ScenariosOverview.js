import React from 'react';

import '../styles/ScenariosOverview.css'; // Importing CSS for styling

const ScenariosOverview = () => {
  return (
    <div id="scenarios" className="section">
      <h2>Scenarios Overview</h2>
      <p>Detailed analysis of potential scenarios where our solutions can be applied effectively.</p>
      <div className="scenario-list">
        <div className="scenario-item">
          <img src="/path/to/low-stress-scene.jpg" alt="Low Stress Scenario" className="scenario-image" />
          <h3>Low Stress: Skate Park</h3>
          <p>In this scenario, users help a child who has fallen off a skateboard, providing a calm environment to practice the basics.</p>
        </div>
        <div className="scenario-item">
          <img src="/path/to/medium-stress-scene.jpg" alt="Medium Stress Scenario" className="scenario-image" />
          <h3>Medium Stress: City Emergency</h3>
          <p>Respond to an emergency in a bustling city environment, with distractions from traffic and bystanders adding complexity.</p>
        </div>
        <div className="scenario-item">
          <img src="/path/to/high-stress-scene.jpg" alt="High Stress Scenario" className="scenario-image" />
          <h3>High Stress: Battlefield</h3>
          <p>Experience high-pressure medical intervention in a warzone, dealing with intense visuals and sounds to simulate real-world chaos.</p>
        </div>
      </div>
    </div>
  );
}

export default ScenariosOverview;