const Benefits = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto ">
        <h3 className="text-[32px] text-center font-bold text-[#59B5A6] mb-2 font-faro py-6">
          Benefits
        </h3>
        <div className="md:flex items-center justify-evenly gap-4 w-full">
          <div className="border-4 border-[#59B5A6] p-4 rounded-md mb-4 md:mb-0">
            <h5 className="text-2xl font-extrabold text-[#59B5A6] mb-2">
              for Teens:
            </h5>
            <ul className="text-[#212529] list-disc list-inside font-work-sans">
              <li className="mb-2">Real projects, not boring lectures</li>
              <li className="mb-2">AI skill-building</li>
              <li className="mb-2">Early internship access</li>
              <li className="mb-2">Mentorship and community</li>
            </ul>
          </div>
          <div className="border-4 border-[#59B5A6] p-4 rounded-md">
            <h5 className="text-2xl font-extrabold text-[#59B5A6] mb-2">
              for Startups:
            </h5>
            <ul className="text-[#212529] list-disc list-inside font-work-sans">
              <li className="mb-2">Access young motivated talent</li>
              <li className="mb-2">Contribute to future education</li>
              <li className="mb-2">Offer micro-internships</li>
              <li className="mb-2">Test ideas with Gen Z insight</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
