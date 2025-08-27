import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPic from "../assets/ai.svg?react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="md:py-12 px-4 overflow-hidden">
      <div className="container mx-auto md:flex items-center justify-between md:py-6 mb-12 md:mb-0">
        <div className="md:w-2/5 md:my-12 py-12 sm:ml-12" data-aos="fade-right">
          <h3 className="text-[#46af9f] text-[2em] font-bold mb-2 font-poppins text-center md:text-left">
            What is The Outliers
          </h3>
          <p className="leading-6 text-[#212529] mb-4 py-4 text-xl">
            The Outliers is a future-of-work platform for teenagers. We match
            teens with AI-enhanced tasks and startup internships to help them
            build real-world experience and future-proof skills
          </p>
        </div>
        <div className="md:w-2/5 md:h-full" data-aos="fade-left">
          <AboutPic className="object-contain" alt="About Picture" />
        </div>
      </div>
    </section>
  );
};

export default About;
