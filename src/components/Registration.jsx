const Registration = () => {
  return (
    <section className="py-12 px-4" id="registration">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <h3 className="text-[32px] font-bold text-[#59B5A6] mb-2 font-faro py-6">
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
