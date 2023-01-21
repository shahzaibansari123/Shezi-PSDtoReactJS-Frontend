import React from "react";
import "./CompanyProfile.css";
const CompanyProfile = () => {
  return (
    <div id="companyprofile">
      <div className="container1">
        <div className="div">
          <p className="heading11">
            Welcome to
            <br />
            <span className="span1">ALM Group</span>
          </p>

          <p className="heading21">
            Whilst Precast Concrete Technology had been developed in Europ and
            the United States of America a Long Time Ago
          </p>
          <button type="button" className="aboutbutton" onClick={() => {}}>
            About
          </button>
        </div>

        <div className="searchbar1">
          {/* <input
          type="text"
          className="searchinput"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Al-Merakhi Projects"
        />
        <button type="submit" className="searchbutton" onClick={handleSubmit}>
          <AiOutlineSearch color="white" size={25} />
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
