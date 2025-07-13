import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1a] to-[#0f172a] text-white flex flex-col items-center justify-center px-6">
      {/* Logo + Title */}
      <div className="flex flex-col items-center gap-4">
        <img
          src="./src/assets/logo.svg"
          alt="AlgoPulse Logo"
          className="w-24 h-24"
        />
        <span className="text-6xl font-bold text-white tracking-wider">
          Algo<span className="text-blue-400">Pulse</span>
        </span>
        <p className="text-center max-w-xl text-gray-300 text-lg mt-2">
          Visualize sorting algorithms and pathfinding algorithms with
          AlgoPulse. Explore and understand these fundamental concepts through
          interactive animations.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">
        <div
          onClick={() => navigate("/sorting")}
          className="bg-[#1e293b] hover:bg-[#27384d] transition cursor-pointer p-6 rounded-xl shadow-md border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-2">Sorting Visualization</h2>
          <p className="text-gray-400">
            Witness various sorting algorithms in action, step by step.
          </p>
        </div>

        <div
          onClick={() => navigate("/pathfinding")}
          className="bg-[#1e293b] hover:bg-[#27384d] transition cursor-pointer p-6 rounded-xl shadow-md border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Pathfinding Visualization
          </h2>
          <p className="text-gray-400">
            Discover how pathfinding algorithms navigate through complex grids.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
