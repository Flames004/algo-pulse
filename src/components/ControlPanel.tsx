import React, { useState } from "react";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import algoInfo, { type AlgoKey } from "../data/algoInfo";

type ControlPanelProps = {
  onGenerateArray: () => void;
  selectedAlgorithm: string;
  setSelectedAlgorithm: (algo: string) => void;
  arraySize: number;
  setArraySize: (size: number) => void;
  onStart: () => void;
  isSorting: boolean;
  speed: number;
  setSpeed: (speed: number) => void;
  onReset: () => void;
};

const ControlPanel: React.FC<ControlPanelProps> = ({
  onGenerateArray,
  selectedAlgorithm,
  setSelectedAlgorithm,
  arraySize,
  setArraySize,
  onStart,
  isSorting,
  speed,
  setSpeed,
  onReset,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const info = algoInfo[selectedAlgorithm as AlgoKey];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-wrap items-center justify-between gap-4 border border-gray-700">
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => onGenerateArray()}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Generate Array
        </button>

        <button
          onClick={onStart}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          disabled={isSorting}
        >
          Start
        </button>

        <button
          onClick={onReset}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="algorithm">Algorithm:</label>
        <select
          id="algorithm"
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="heap">Heap Sort</option>
          <option value="shell">Shell Sort</option>
        </select>

        <button
          className="text-blue-400 hover:text-blue-300 transition"
          onClick={() => setShowInfo(true)}
          title="Algorithm Info"
        >
          <FaInfoCircle size={18} />
        </button>
      </div>

      <div className="flex">
        <label htmlFor="size">Size: {arraySize}</label>
        <input
          id="size"
          min="10"
          max="100"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          className="accent-blue-500 ml-2"
          type="range"
        />
      </div>

      <div className="flex">
        <label htmlFor="speed">Speed: {speed}ms</label>
        <input
          id="speed"
          min="10"
          max="1000"
          step="10"
          type="range"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="accent-green-500 ml-2"
          disabled={isSorting}
        />
      </div>

      {showInfo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-[#1f1f1f] rounded-xl max-w-md w-full p-6 shadow-lg text-white relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowInfo(false)}
              title="Close"
            >
              <FaTimes />
            </button>

            <h2 className="text-xl font-bold mb-2 text-blue-400">
              {info.heading}
            </h2>
            <p className="text-sm text-gray-300 mb-4">{info.description}</p>

            <div className="text-sm">
              <p>
                <span className="font-semibold text-white">Best:</span>{" "}
                {info.complexity.best}
              </p>
              <p>
                <span className="font-semibold text-white">Average:</span>{" "}
                {info.complexity.average}
              </p>
              <p>
                <span className="font-semibold text-white">Worst:</span>{" "}
                {info.complexity.worst}
              </p>
              <p>
                <span className="font-semibold text-white">Space:</span>{" "}
                {info.complexity.space}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
