import { Navbar } from "./components";

import "./App.css";
import {
  Home,
  CompanyProfile,
  ProductsandServices,
  TechnicalCapabilities,
  EquipmentsandFacilities,
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
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route
            path="/ProductsandServices"
            element={<ProductsandServices />}
          />
          <Route path="/Projects" element={<Projects />} />
          <Route
            path="/TechnicalCapabilities"
            element={<TechnicalCapabilities />}
          />
          <Route
            path="/EquipmentsandFacilities"
            element={<EquipmentsandFacilities />}
          />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <CompanyProfile />
      <ProductsandServices />
      <Projects />
      <TechnicalCapabilities />
      <EquipmentsandFacilities />
      <Contactus /> */}
    </div>
  );
}

export default App;
