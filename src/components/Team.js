import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Teams.css"; // Make sure to create and import your CSS file

const Team = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const teamMembers = [
    {
      name: "Ethan Kies",
      email: "ethankies@vt.edu",
      link: "https://ethankies.com",
      description: "Software Engineer & Designer.",
    },
    {
      name: "Dan Tran",
      email: "dantrvn47@vt.edu",
      link: "https://www.linkedin.com/in/danielvtran/",
      description:
        "",
    },
    {
      name: "Colin Roberts",
      email: "colinroberts@vt.edu",
      link: "https://www.linkedin.com/in/colin-roberts-professional/",
      description: "Undergraduate Psychology major at Virginia Tech        ",
    },
    {
      name: "Mayali Clary",
      email: "mayali@vt.edu",
      link: "https://mayali24.wixsite.com/mayaliux",
      description:
        "UX Designer with a background in cognitive and behavioral neuroscience and human-computer interaction.",
    },
    {
      name: "Shriya Panta",
      email: "shriyap03@vt.edu",
      link: "https://www.linkedin.com/in/shriya-panta-75aa49225/",
      description:
        "Undergraduate Researcher || Computational & Systems Neuroscience Major at Virginia Tech, Human-Computer Interaction Minor.",
    },
    {
      name: "Anushka Rao",
      email: "anushka@vt.edu",
      link: "https://www.linkedin.com/in/anushka-rao-84805a185/",
      description: "Computer Science Student at Virginia Tech.",
    },
    {
      name: "Gavin Bassett",
      email: "gavinb01@vt.edu",
      link: "https://www.linkedin.com/in/gavin-bassett/",
      description: "Intern at Fannie Mae | CS @ Virginia Tech.",
    },
    // Add more members as needed
  ];

  return (
    <div id="team" className="section">
      <h2>Our Team</h2>
      {/* <p>team</p> */}
      <div className="slider-container">
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <h3>{member.name}</h3>

              <p>{member.email}</p>
              <p>{member.description}</p>
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
