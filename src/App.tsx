import React from "react";
import NavBar from "./components/NavBar";
import ControlPanel from "./components/ControlPanel";
import PathfindingVisualizer from "./components/PathfindingVisualizer";
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="p-4 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Sorting Visualizer</h2>
          <ControlPanel />
          <SortingVisualizer />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Pathfinding Visualizer</h2>
          <ControlPanel />
          <PathfindingVisualizer />
        </section>
      </main>
    </div>
  );
}

export default App;
