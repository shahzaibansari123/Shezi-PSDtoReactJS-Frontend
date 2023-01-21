import React from "react";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-container">
        <div className="footer-logo">
          <img className="logo" src={images.logo} alt="logo" />
          {/* <p className="copyright">2023 Al meraikhi Industrial complex</p> */}
        </div>
        {/* <div> */}
        {/* {['HOME','CAREERS','PRIVACY POLICY', 'SITEMAP'].map((item, index)=>(
        <>
        <ul className="f-items">
          <li className="f-list" key={index}>
            <a className="f-links" href="#blank">{item}</a>
          </li>
        </ul>
        </>
      ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
