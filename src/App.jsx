import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import { FaWhatsapp } from "react-icons/fa";
import Schedule from "./components/schedule";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-omkaraLight">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Testimonials />
      <Contact />
       <a
        href="https://wa.me/919886591201?text=Hello%20I%20am%20interested%20in%20Omkara%20Yoga%20classes"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-xl hover:scale-110 transition z-50"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;

