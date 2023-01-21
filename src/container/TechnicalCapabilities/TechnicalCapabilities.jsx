import React, { useState } from "react";

import { images } from "../../constants";
import "./TechnicalCapabilities.css";

const TechnicalCapabilities = () => {
  const [employees, setEmployees] = useState(50);
  const [offices, setOffices] = useState(15);
  const [countriesServing, setCountriesServing] = useState(35);
  const [projects, setProjects] = useState(300);

  return (
    <div id="technicalcapabilities">
      <div className="tc-container">
        <p>
          <img src={images.logosvg} alt="logosvg" />
          <span> ALM</span> IN NUMBERS
        </p>
        <p className="tc-description">
          Al meraikhi industrial complex's design Department helps our customers
          design and select the best product for any application
        </p>
        <div className="numbers">
          <div className="list">
            <p>{employees}</p> <p>EMPLOYEES</p>
          </div>
          <div className="list">
            <p>{offices}</p> <p>OFFICES</p>
          </div>
          <div className="list">
            <p>{countriesServing}</p> <p>COUNTRIES SERVING</p>
          </div>
          <div className="list">
            <p>{projects}</p> <p>PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCapabilities;
