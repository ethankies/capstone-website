import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Features from './components/Features';
import ScenariosOverview from './components/ScenariosOverview';
import Team from './components/Team';
import ResearchAndDevelopment from './components/ResearchAndDevelopment';
import ContactFeedback from './components/ContactFeedback';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HomePage />
        <About />
        <Features />
        <ScenariosOverview />
        <Team />
        {/* <ResearchAndDevelopment /> */}
        <ContactFeedback />
      </div>
    </Router>
  );
}

export default App;
