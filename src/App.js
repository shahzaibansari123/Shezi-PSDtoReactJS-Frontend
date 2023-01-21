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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/ProductandServices" element={<ProductandServices />} />
          <Route path="/Projects" element={<Projects />} />
          <Route
            path="/TechnicalCapabilities"
            element={<TechnicalCapabilities />}
          />
          <Route
            path="/EquipmentandFacilities"
            element={<EquipmentandFacilities />}
          />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
