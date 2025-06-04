import FounderImg from "../assets/founder.png";

const Founder = () => {
  return (
    <section className="px-3 py-12 bg-[#EDFFEF]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="text-[32px] font-bold mb-2 font-faro py-6">
          About the Founder
        </h3>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
            <img src={FounderImg} alt="Eng. Arwa Basha" />
          </div>
          <p className="font-work-sans leading-6 text-[#212529] py-4 text-center md:w-3/5">
            Built by Arwa Basha the Google Student Ambassador in UAE, Women
            Techmakers scholar, and serial founder. We’re on a mission to help
            youth learn through action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
