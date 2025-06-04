import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Founder from "./components/founder";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [backtoTop, setBackToTop] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Founder />
      <Registration />
      <Footer />
      {backtoTop && (
        <button
          className="fixed bottom-4 right-4 bg-[#59B5A6] text-white p-3 rounded-full cursor-pointer"
          onClick={scrollUp}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
