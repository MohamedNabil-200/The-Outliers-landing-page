import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefits = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="container mx-auto ">
        <h3 className="text-[2em] text-center font-bold text-[#46af9f] mb-2 font-poppins py-6" data-aos="fade-down">
          What we offer
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-4 w-full">
          <div className="border border-[#59B5A6] pt-4 rounded-md mb-4 md:mb-0 w-full md:w-fit h-[218px] overflow-hidden" data-aos="fade-right">
            <h5 className="text-2xl font-extrabold text-[#59B5A6] mb-2 pl-4">
              for Teens:
            </h5>
            <ul className="text-[#212529]">
              <li className=" bg-[#46af9f] pl-2 pr-4 py-2 text-white font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Real projects, not boring lectures</li>
              <li className=" bg-[#92D3C9] pl-2 pr-4 py-2 text-gray-600 font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">AI skill-building</li>
              <li className=" bg-[#46af9f] pl-2 pr-4 py-2 text-white font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Early internship access</li>
              <li className=" bg-[#92D3C9] pl-2 pr-4 py-2 text-gray-600 font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Mentorship and community</li>
            </ul>
          </div>
          <div className="border border-[#59B5A6] pt-4 rounded-md mb-4 md:mb-0 w-full md:w-fit h-[218px] overflow-hidden" data-aos="fade-left">
            <h5 className="text-2xl font-extrabold text-[#59B5A6] mb-2 pl-4">
              for Startups:
            </h5>
            <ul className="text-[#212529]">
              <li className=" bg-[#46af9f] pl-2 pr-4 py-2 text-white font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Access young motivated talent</li>
              <li className=" bg-[#92D3C9] pl-2 pr-4 py-2 text-gray-600 font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Contribute to future education</li>
              <li className=" bg-[#46af9f] pl-2 pr-4 py-2 text-white font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Offer micro-internships</li>
              <li className=" bg-[#92D3C9] pl-2 pr-4 py-2 text-gray-600 font-medium hover:bg-white hover:text-[#46af9f] transition-all duration-300 cursor-default hover:pl-4">Test ideas with Gen Z insight</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
