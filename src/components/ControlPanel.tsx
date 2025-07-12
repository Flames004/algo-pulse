import React from "react";

const ControlPanel = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-4 flex-wrap">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Generate Array</button>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Start</button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Reset</button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="algorithm">Algorithm:</label>
        <select id="algorithm" className="bg-gray-700 p-2 rounded">
          <option>Bubble Sort</option>
          <option>Selection Sort</option>
          <option>Merge Sort</option>
        </select>
      </div>
    </div>
  );
};

export default ControlPanel;
