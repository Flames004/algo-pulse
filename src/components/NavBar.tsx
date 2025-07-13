const NavBar = () => {
  return (
    <nav className="text-white px-6 py-4 shadow-md bg-[#121212] flex flex-wrap justify-between items-center">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold tracking-wide text-blue-400">
        AlgoPulse
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 mt-2 sm:mt-0">
        <button className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-200">
          Sorting
        </button>
        <button className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-200">
          Pathfinding
        </button>

        {/* Optional: GitHub link */}
        <a
          href="https://github.com/Flames004/algo-pulse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-200 underline"
        >
          GitHub
        </a>

        {/* Optional: Theme toggle */}
        {/* <button className="text-sm hover:text-yellow-400">🌓</button> */}
      </div>
    </nav>
  );
};

export default NavBar;
