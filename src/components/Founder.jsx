import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FounderImg from "../assets/founder.jpg";

const Founder = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="px-4 py-12 bg-[#EDFFEF]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3
          className="text-[2em] font-bold mb-3 font-poppins text-[#46af9f]"
          data-aos="fade-down"
        >
          About the Founder
        </h3>
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="rounded-full flex justify-center items-center">
            <img
              src={FounderImg}
              alt="Eng. Arwa Basha"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          <p className="font-bold  text-2xl mt-3 font-poppins">Arwa Basha</p>
          <p className="leading-6 py-4 text-xl lg:w-3/5 mt-4">
            A multipotentialite with a passion for initiating, creating, and
            managing people and systems. She served as the Country Manager for
            an Emirati IT firm in Egypt and graduated with distinction and
            honors in Computer Engineering from the University of Sharjah. She
            has been awarded multiple international scholarships for women in
            computing from Google and the Anita Borg Institute in Switzerland
            and the USA. Her journey includes working as a tutor in His Highness
            Sheikh Mohammed Bin Rashid’s Smart Learning Program, powered by
            Microsoft and HP, and founding Tawleafa, a startup focused on
            innovation and impact. She has also contributed as a freelance
            trainer and volunteered with AlDarayn Academy—one of Egypt’s
            earliest online learning platforms, launched 15 years ago. Beyond
            her professional pursuits, she is a proud mother of two,
            continuously balancing leadership, learning, and nurturing the next
            generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
