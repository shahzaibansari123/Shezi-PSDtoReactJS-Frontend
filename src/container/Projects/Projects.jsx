import React from "react";
import "./Projects.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../../constants";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-container">
        <p className="ptitle">Projects</p>
        <div className="content">
          <div className="pheading">
            <p className="htext">
              ALM group has over 20 years of Experience, having delivered
              projects in 43 countries, across 11 sectors
            </p>
          </div>
          <div className="linediv">
            <div className="pline"></div>
          </div>
          <div className="p-buttondiv">
            <button className="pbutton" type="button" onClick={()=>{}}>
               {/* you can sure add another View Project More component and then navigate on it  */}
              View Projects
            </button>
          </div>
        </div>
        <div className="projectlist">
          <div className="projectitem1 hover-effect">
            <img className="p-logosvg" src={images.logosvg} alt="svg" />
            <p className="p-title">ALM AASHTO</p>
            <p className="p-subtitle">
              YAS CLUB, SHARJAH PRECAST CONCRETE WORKS
            </p>

            <span className="p-line"></span>
            <a href="#blank" className="p-arrow">
              <AiOutlineArrowRight size={40} color="white" />
            </a>
          </div>

          <div className="projectitem2 hover-effect">
            <img className="p-logosvg" src={images.logosvg} alt="svg" />
            <p className="p-title">ALM AASHTO</p>
            <p className="p-subtitle">
              YAS CLUB, ABUDHABI PRECAST CONCRETE WORKS
            </p>

            <span className="p-line"></span>
            <a href="#blank" className="p-arrow">
              <AiOutlineArrowRight size={40} color="white" />
            </a>
          </div>

          <div className="projectitem3 hover-effect">
            <img className="p-logosvg" src={images.logosvg} alt="svg" />
            <p className="p-title">ALM AASHTO</p>
            <p className="p-subtitle">YAS CLUB, AJMAN PRECAST CONCRETE WORKS</p>

            <span className="p-line"></span>
            <a href="#blank" className="p-arrow">
              <AiOutlineArrowRight size={40} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
