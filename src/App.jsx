import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import International from "./components/pages/International.jsx";
import Domestic from "./components/pages/Domestic.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Terms from "./components/pages/Terms.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Volumetric from "./components/pages/Tools/volumetric.jsx";
import Conversion from "./components/pages/Tools/conversion.jsx";
import Prohibited from "./components/pages/Tools/prohibited.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/international-courier" element={<International />} />
          <Route path="/prohibited" element={<Prohibited />} />
          <Route path="/conversion" element={<Conversion />} />
          <Route path="/volumetric" element={<Volumetric />} />
          <Route path="/domestic-courier" element={<Domestic />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsconditions" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
