import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPic from "../assets/teamWork.svg?react";

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="min-h-screen bg-[#EDFFEF] py-12 px-4 flex items-center overflow-hidden">
      <div className="container mx-auto md:flex items-center gap-6 md:py-6">
        <div className="md:w-1/2 md:h-full flex items-center justify-center" data-aos="fade-right">
          <HeroPic className="object-contain" alt="Hero Picture" />
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          <h1 className="text-[2em] md:text-[40px]  2xl:text-7xl font-extrabold text-center sm:text-left mb-2 mx-4 md:mx-0 lg:ml-0 font-poppins text-[#59B5A6] leading-[60px] xl:leading-24">
            From Classrooms to Life: Empowering Teens Through Experiences
          </h1>
          <p className="text-2xl font-inter text-[#121717] py-6 mb-4 md:mb-0 mx-4 md:m-0">
            The Outliers helps teenagers learn future career skills and generate income by solving real AI-powered project tasks, securing internships at startups, volunteering in civil work, and getting shortlisted for worldwide scholarships and opportunities.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:justify-between md:justify-start mx-4 md:mx-0">
            <NavLink
              to="https://docs.google.com/forms/d/e/1FAIpQLSeujTvG6OJMo9fGdcXcpwWpVidGrr8zyzQpLjEMi22cjm-baw/viewform?usp=header"
              target="_blank"
              className="w-full lg:w-fit text-center lg:text-left bg-black text-white rounded-2xl p-4 cursor-pointer hover:bg-[#59B5A6] transition-all ease-in-out duration-300"
            >
              I’m a Teen – Show Me How
            </NavLink>
            <NavLink
              to="https://docs.google.com/forms/d/e/1FAIpQLSfzIBO4Cb08z1YTsGI0-fouKYAeyaLPeTemnFlgWJjnoC4jLA/viewform?usp=header"
              target="_blank"
              className="w-full lg:w-fit text-center lg:text-left bg-black text-white rounded-2xl p-4 cursor-pointer hover:bg-[#59B5A6] transition-all ease-in-out duration-300"
            >
              I’m a Startup – Offer Internships
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
