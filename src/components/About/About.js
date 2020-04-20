import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container" data-testid="about-container">
      <h2 className="about-header">About CovidLive</h2>
      <p>
        CovidLive CO is a tool to help you track the spread of Covid-19 (Coronavirus) across the state of Colorado. At-risk populations
        may use this to determine hotspots to avoid, and find local health department contact information. 
      </p>
      <p>
        We source our information from the New York Times, CDPHE Live Open Data, and State County Health Departments API by Postman. 
      </p>  
    </div>
  );
};

export default About;
