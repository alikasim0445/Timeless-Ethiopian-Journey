import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Bookings";
import MapPage from "./components/MapPage";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          {/* Main page with all components */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Gallery />
              <Booking />
            </>
          } />
          
          {/* Separate map page */}
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;