import AboutPic from "../assets/aboutPic.png";

const About = () => {
  return (
    <section className="md:py-12 px-4">
      <div className="container mx-auto md:flex items-center gap-6 md:h-screen md:py-6 mb-12 md:mb-0">
        <div className="md:w-1/2 md:my-12 py-12 sm:ml-12">
          <h3 className="text-[#212529] text-5xl font-bold mb-2 font-poppins">
            What is The Outliers
          </h3>
          <p className="leading-6 text-[#212529] mb-4 py-4 text-lg">
            The Outliers is a future-of-work platform for teenagers. We match
            teens with AI-enhanced tasks and startup internships to help them
            build real-world experience and future-proof skills
          </p>
        </div>
        <div className="md:w-1/2 md:h-full h-fit flex items-center justify-center">
          <img src={AboutPic} alt="Hero Picture" />
        </div>
      </div>
    </section>
  );
};

export default About;
