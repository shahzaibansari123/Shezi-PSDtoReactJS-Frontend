import { Navbar } from "./components";

import "./App.css";
import {
  Home,
  CompanyProfile,
  ProductandServices,
  TechnicalCapabilities,
  EquipmentandFacilities,
  Contactus,
  Projects,
} from "./container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Company Profile" element={<CompanyProfile />} />
          <Route
            path="/Product and Services"
            element={<ProductandServices />}
          />
          <Route path="/Projects" element={<Projects />} />
          <Route
            path="/Technical Capabilities"
            element={<TechnicalCapabilities />}
          />
          <Route
            path="/Equipment and Facilities"
            element={<EquipmentandFacilities />}
          />
          <Route path="/Contact us" element={<Contactus />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Home /> */}
      <CompanyProfile />
      <ProductandServices />
      <Projects />
      <TechnicalCapabilities />
      <EquipmentandFacilities />
      <Contactus />
    </div>
  );
}

export default App;
