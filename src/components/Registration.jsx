import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Registration = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="py-12 px-4" id="registration">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <h3 className="text-[32px] font-bold text-[#59B5A6] mb-2 font-poppins py-6" data-aos="fade-down">
          Registration
        </h3>
        <iframe
          src="https://forms.gle/zX7M6EnLtqpyLkcs6"
          height="700"
          class="rounded-2xl border w-full md:w-3/5"
          title="Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Registration;
