import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SortingVisualizer from "./pages/SortingVisualizer";
import PathfindingVisualizer from "./pages/PathfindingVisualizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sorting"
          element={
            <>
              <NavBar />
              <SortingVisualizer />
            </>
          }
        />
        <Route
          path="/pathfinding"
          element={
            <>
              <NavBar />
              <PathfindingVisualizer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
