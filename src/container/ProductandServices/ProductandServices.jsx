import React from "react";
import "./ProductandServices.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../../constants";

const ProductsandServices = () => {
  return (
    <div id="productandservices">
      <div className="PandS-container">
        <div className="headingdiv">
          <p className="heading">PRODUCTS AND SERVICES </p>
          <div className="line"></div>
        </div>
        <p className="description">
          Al Meraikhi Industrial Complex's Precast Concret production features
          various products, which are recognized internationally and developed
          under licenses of the worlds leading companies in their fileds,
          Precast Concrete Production.
        </p>
        <div className="maincontent">
          <div className="leftcontent">
            <img className="logosvg1" src={images.logosvg} alt="svg" />
            <p className="title1">ALM AASHTO</p>
            <p className="subtitle">
              PRECAST CONCRETE PRODUCTION IN AL MERAIKHI COMPLEX FACTORY COULD
              BE GENERALLY DIVIDED INTO THREE CATEGORIES
            </p>

            <span className="line2"></span>
            <a href="#" className="arrow">
              <AiOutlineArrowRight size={40} color="white" />
            </a>
          </div>

          <div className="rightcontent">
            <p className="righttext">GENERAL</p>
            <p className="title2">
              ALM AASHTO
              <img
                className="logosvg2"
                src={images.logosvg}
                height="35px"
                width="35px"
                alt="svg"
              />
            </p>
            <p className="righttext">ALM HOLLOW PRESTRESSED BEAMS & RWPD</p>
            <p className="righttext">ALMP HCS</p>
            <p className="righttext"> PRESTRESSED CONCRETE</p>
            <p className="righttext">PRECAST STRUCTURAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsandServices;
