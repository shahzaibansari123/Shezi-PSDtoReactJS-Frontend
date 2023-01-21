import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  CompanyProfile,
  ProductandServices,
  TechnicalCapabilities,
  EquipmentandFacilities,
  Contactus,
  Projects,
} from "../../container";
import {Navbar, Footer} from '../../components'
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <>
    <Navbar />
      <div id="home">
        <div className="home-container">
          <div>
            <p className="heading1">ALM International Industrial Complex</p>
            <p className="heading2">
              Whilst <span className="span">Precast</span>
              <br />
              <span className="span">Concrete </span>Technology
            </p>
            <p className="heading3">
              ╻╻╻╻╻<span className="span2">╻</span>
            </p>
          </div>

          <div className="searchbar">
            <input
              type="text"
              className="searchinput"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search Al-Merakhi Projects"
            />
            <button
              type="submit"
              className="searchbutton"
              onClick={handleSubmit}
            >
              <AiOutlineSearch color="white" size={25} />
            </button>
          </div>
        </div>
      </div>
      <CompanyProfile />
      <ProductandServices />
      <Projects />
      <TechnicalCapabilities />
      <EquipmentandFacilities />

      <Footer />
    </>
  );
};

export default Home;
