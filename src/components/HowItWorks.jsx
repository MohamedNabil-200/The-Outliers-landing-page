import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Join from "../assets/join.svg?react";
import Tasks from "../assets/tasks.svg?react";
import Portfolio from "../assets/portfolios.svg?react";
import Mentorship from "../assets/mentorship.svg?react";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="px-4 py-12 bg-[#EDFFEF]">
      <div className="container mx-auto md:flex flex-col items-center justify-center">
        <h3 className="w-[280px] sm:w-auto mx-auto text-center md:text-left text-[2em] sm:text-3xl md:text-[32px] font-bold mb-2 font-poppins py-6 text-[#46af9f]" data-aos="fade-down">
          How It Works (for Teens)
        </h3>
        <div className="my-6 flex flex-wrap items-stretch justify-center gap-4">
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#46af9f] group" data-aos="fade-up">
            <Join className="w-full h-fit transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105" alt="Join Illustration" />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#46af9f] text-3xl group-hover:text-white group-hover:bg-[#46af9f] transition-colors duration-300">
              Join the platform
            </p>
          </div>
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#46af9f] group" data-aos="fade-up" data-aos-delay="200">
            <Tasks
              className="w-full h-fit transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105"
              alt="Tasks Notification Illustration"
            />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#46af9f] text-2xl group-hover:text-white group-hover:bg-[#46af9f] transition-colors duration-300">
              Complete real tasks powered by AI
            </p>
          </div>
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#46af9f] group" data-aos="fade-up" data-aos-delay="400">
            <Portfolio className="w-full h-fit transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105" alt="Portfolio Illustration" />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#46af9f] text-2xl group-hover:text-white group-hover:bg-[#46af9f] transition-colors duration-300">
              Build a standout portfolio
            </p>
          </div>
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#46af9f] group" data-aos="fade-up" data-aos-delay="600">
            <Mentorship
              className="w-full h-fit transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105"
              alt="Mentorship Illustration"
            />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#46af9f] text-2xl group-hover:text-white group-hover:bg-[#46af9f] transition-colors duration-300">
              Apply for internships and get mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
