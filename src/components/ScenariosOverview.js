import React from "react";

import "../styles/ScenariosOverview.css"; // Importing CSS for styling
import ls from "../assets/icat_images/lowscreenshot.png";
import ms from "../assets/icat_images/mediumscreenshot.png";
import hs from "../assets/icat_images/highscreenshot.png";
import homess from "../assets/icat_images/homescreenshot.png";
const ScenariosOverview = () => {
  return (
    <div id="scenarios" className="section">
      <h2>Scenarios</h2>
      <p>Scenes in REACTS</p>
    
      <div className="scenario-list">
      <div className="scenario-item">
          <img src={homess} alt="Scene Selection" className="scenario-image" />
          <h3>Scene Selection</h3>
          <p>Menu selection to choose desired stress level.</p>
        </div>
        <div className="scenario-item">
          <img src={ls} alt="Low Stress Scenario" className="scenario-image" />
          <h3>Low Stress: Skate Park</h3>
          <p>
            In this scenario, users help a child who has fallen off a
            skateboard, providing a calm environment to practice the basics.
          </p>
        </div>
        <div className="scenario-item">
          <img
            src={ms}
            alt="Medium Stress Scenario"
            className="scenario-image"
          />
          <h3>Medium Stress: City Emergency</h3>
          <p>
            Respond to an emergency in a bustling city environment, with
            distractions from traffic and bystanders adding complexity.
          </p>
        </div>
        <div className="scenario-item">
          <img src={hs} alt="High Stress Scenario" className="scenario-image" />
          <h3>High Stress: Battlefield</h3>
          <p>
            Experience high-pressure medical intervention in a warzone, dealing
            with intense visuals and sounds to simulate real-world chaos.
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default ScenariosOverview;
