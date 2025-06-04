import HeroPic from "../assets/heroPic.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#EDFFEF] py-12 px-4">
      <div className="container mx-auto md:flex items-center gap-6 md:h-screen md:py-6">
        <div className="md:w-1/2 md:h-full h-fit flex items-center justify-center">
          <img src={HeroPic} alt="Hero Picture" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-[2em] md:text-[64px] font-extrabold mb-2 font-faro text-[#59B5A6] leading-[60px]">
            Learn by Doing.
            <br />
            Lead by Outperforming.
          </h1>
          <p className="text-2xl font-faro text-[#212529] py-6 mb-4 md:mb-0">
            The Outliers helps teenagers learn by solving AI-powered tasks and
            getting internships at real startups.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/#registration"
              className="bg-black text-white rounded-2xl p-4 cursor-pointer hover:bg-[#59B5A6] transition-all ease-in-out duration-300"
            >
              I’m a Teen – Show Me How
            </a>
            <a
              href="#contact"
              className="bg-black text-white rounded-2xl p-4 cursor-pointer hover:bg-[#59B5A6] transition-all ease-in-out duration-300"
            >
              I’m a Startup – Offer Internships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
