import React from 'react';
import Slider from 'react-slick';
import '../styles/Teams.css'; // Make sure to create and import your CSS file

const Team = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const teamMembers = [
    {
      name: "Ethan Smith",
      email: "ethankies@vt.edu",
      link: "https://ethankies.com",
      description: "Ethan brings his expertise in Business Information Technology to the team, leading our design efforts on the medium stress scenarios."
    },
    {
      name: "Mayali Rodrigo",
      email: "mayali.rodrigo@example.com",
      link: "https://linkedin.com/in/mayalirodrigo",
      description: "Mayali, with her background in Neuroscience, focuses on integrating cognitive principles into our interactive designs."
    },
    {
      name: "Colin Green",
      email: "colin.green@example.com",
      link: "https://linkedin.com/in/colingreen",
      description: "Colin applies his knowledge in Psychology to enhance the realism of stress-inducing factors in our simulations."
    },
    // Add more members as needed
  ];

  return (
    <div id="team" className="section">
      <h2>Our Team</h2>
    
      <Slider {...settings}>
        {teamMembers.map(member => (
          <div key={member.name} className="team-card">
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <a href={member.link} target="_blank" rel="noopener noreferrer">Profile</a>
            <p>{member.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Team;
