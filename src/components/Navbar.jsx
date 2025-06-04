import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#EDFFEF] shadow-md shadow-black/10 sticky top-0">
      <div className="container mx-auto flex items-center justify-between h-20 py-4">
        <a href="#" className="h-full w-56 flex items-center">
          <img src={Logo} alt="Outliers Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
