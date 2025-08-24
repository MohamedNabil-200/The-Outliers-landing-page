import Join from "../assets/join.svg?react";
import Tasks from "../assets/Tasks.svg?react";
import Portfolio from "../assets/portfolios.svg?react";
import Mentorship from "../assets/mentorship.svg?react";

const HowItWorks = () => {
  return (
    <section className="px-3 py-12 bg-[#EDFFEF]">
      <div className="container mx-auto md:flex flex-col items-center justify-center">
        <h3 className="text-center md:text-left text-3xl md:text-[32px] font-bold mb-2 font-poppins py-6">
          How It Works (for Teens)
        </h3>
        <div className="my-6 flex flex-wrap items-stretch justify-center gap-4">
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#59B5A6]">
            <Join className="w-full h-fit" alt="Join Illustration" />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#59B5A6] text-3xl">
              Join the platform
            </p>
          </div>
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#59B5A6]">
            <Tasks
              className="w-full h-fit"
              alt="Tasks Notification Illustration"
            />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#59B5A6] text-2xl">
              Complete real tasks powered by AI
            </p>
          </div>
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#59B5A6]">
            <Portfolio className="w-full h-fit" alt="Portfolio Illustration" />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#59B5A6] text-2xl">
              Build a standout portfolio
            </p>
          </div>
          <div className="overflow-hidden mb-4 md:mb-0 w-full md:w-2/5 lg:w-1/5 justify-center items-center text-center font-poppins text-[#212529] rounded-xl font-semibold border border-[#59B5A6]">
            <Mentorship
              className="w-full h-fit"
              alt="Mentorship Illustration"
            />
            <p className="h-full bg-white p-6 rounded-b-xl border-t border-[#59B5A6] text-2xl">
              Apply for internships and get mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
