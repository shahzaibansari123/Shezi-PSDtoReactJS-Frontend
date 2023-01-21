import React from "react";
import { images } from "../../constants";
import "./CompanyProfile.css";

const CompanyProfile = () => {
  return (
    <div id="companyprofile">
      <div className="profile-container">
        <div className="profiletext">
          <p className="text1">
            Welcome to
            <br />
            <span className="pspan1">alm group</span>
          </p>

          <p className="text2">
            Whilst Precast Concrete Technology had been developed in Europe and
            the United States of America a Long Time Ago
          </p>
          <button type="button" className="aboutbutton" onClick={() => {}}>
            {/* you can sure add another About More component and then navigate on it  */}
            More About ALM
          </button>
        </div>

        <div className="profileimages">
          <img src={images.profile} className="pimage1" alt="profileimg1" />
          <img src={images.profile2} className="pimage2" alt="profileimg2" />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
