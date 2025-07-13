import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-400 underline"
      : "hover:text-blue-400";

  return (
    <nav className="text-white px-6 py-4 shadow-md bg-[#121212] flex flex-wrap justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
      </Link>

      <div className="flex items-center space-x-6 mt-2 sm:mt-0">
        <Link
          to="/sorting"
          className={`text-sm sm:text-base transition ${isActive("/sorting")}`}
        >
          Sorting
        </Link>
        <Link
          to="/pathfinding"
          className={`text-sm sm:text-base transition ${isActive(
            "/pathfinding"
          )}`}
        >
          Pathfinding
        </Link>

        {/* Optional GitHub link */}
        <a
          href="https://github.com/Flames004/algo-pulse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base hover:text-blue-400 transition underline"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
