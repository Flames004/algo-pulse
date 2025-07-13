import { Link, useLocation } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="text-white px-10 py-4 shadow-md bg-[#121212] flex flex-wrap justify-between items-center z-50">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
      </Link>

      <div className="flex items-center space-x-10">
        {[
          { name: "Home", path: "/" },
          { name: "Sorting", path: "/sorting" },
          { name: "Pathfinding", path: "/pathfinding" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`relative group text-sm sm:text-base font-medium transition-colors duration-300 ${
              isActive(link.path)
                ? "text-blue-400"
                : "text-white hover:text-blue-400"
            }`}
          >
            {link.name}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ease-in-out
              ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </Link>
        ))}

        <a
          href="https://github.com/Flames004/algo-pulse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 flex items-center gap-1 text-sm sm:text-base border-blue-400 border-2 px-3 py-1 rounded-lg hover:bg-blue-400"
        >
          {/* <FaGithub className="text-xl md:hidden" /> */}
          <span className="text-blue-400 hover:text-white">
            GitHub
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
