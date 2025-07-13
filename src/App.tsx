import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SortingVisualizer from "./components/SortingVisualizer";
import PathfindingVisualizer from "./components/PathfindingVisualizer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="px-4 py-6 max-w-screen mx-auto bg-gray-800">
        <Routes>
          <Route path="/" element={<div className="text-center text-gray-400">Choose a module from the top menu</div>} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/pathfinding" element={<PathfindingVisualizer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
