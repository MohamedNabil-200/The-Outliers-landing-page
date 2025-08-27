import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import EarlyAccessPic from "../assets/adventure.svg?react";

const Registration = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="py-12 px-4" id="registration">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <h3
          className="text-center text-[2em] font-bold text-[#46af9f] mb-2 font-poppins py-6"
          data-aos="fade-down"
        >
          Your future won’t wait. Ready to chase it?
        </h3>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <p className="leading-6 py-4 text-xl lg:w-3/5 mb-4">
              You’re not just signing up, you’re joining a squad of early
              builders who believe in making ideas real. Together, we’ll learn,
              grow, and set the standard for everyone who comes after.
            </p>
            <NavLink
              to="https://docs.google.com/forms/d/e/1FAIpQLSeujTvG6OJMo9fGdcXcpwWpVidGrr8zyzQpLjEMi22cjm-baw/viewform?usp=header"
              target="_blank"
              className="block mt-8 w-full md:w-fit text-center lg:text-left font-medium bg-[#46af9f] text-white rounded-2xl p-4 cursor-pointer border border-[#46af9f] hover:bg-white hover:text-[#46af9f] transition-all ease-in-out duration-300"
            >
              Get early access
            </NavLink>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <EarlyAccessPic
              className="w-full h-full object-contain"
              alt="Early Access Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
