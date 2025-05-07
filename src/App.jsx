import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "../src/components/Services";
import Gallery from "../src/components/Gallery";
import Booking from "../src/components/Bookings";

function App() {
  return (
    <div className="bg-gray-100 ">
      <Navbar />
        {/* Consider using a max-width to contain content */}
        
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Booking />
        
      
    </div>
  );
}

export default App;
