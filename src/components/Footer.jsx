const Footer = () => {
  return (
    <footer className="bg-[#383838] py-12 px-4 text-white" id="contact">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p>
          Want to partner with us or have a question?
          <br /> 📧{" "}
          <a
            className="underline font-bold text-[#59B5A6]"
            href="mailto:hello@theoutliersstartup.com"
          >
            hello@theoutliersstartup.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
