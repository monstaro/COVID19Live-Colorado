import React from "react";
import "./StayingProtected.scss";

const StayingProtected = () => {
  return (
    <div
      className="staying-protected-container"
      data-testid="staying-protected-container"
    >
      <h2 className="staying-protected-header">Staying Protected</h2>
      <p>
        Here are some links to government-sponsored sites with all the
        information you need to stay protected:
      </p>
      <a
        alt="Consumer Product Safety Commission"
        className="link"
        href="https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/covid-19-home-safety"
        rel="noopener noreferrer"
        target="_blank"
      >
        CPSC COVID-19 Home Safty Page
      </a>
      <a
        alt="Pandemic Resources & Information"
        className="link"
        href="https://www.api.org/news-policy-and-issues/pandemic-information"
        rel="noopener noreferrer"
        target="_blank"
      >
        Pandemic Resources & Information by API Energy
      </a>
    </div>
  );
};

export default StayingProtected;
