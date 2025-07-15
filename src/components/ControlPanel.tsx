import React, { useState } from "react";
import { FaInfoCircle, FaTimes, FaCode, FaChevronDown } from "react-icons/fa";
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
  onShowSnippet: () => void; // <-- new prop
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
  onShowSnippet,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const info = algoInfo[selectedAlgorithm as AlgoKey];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-wrap items-center justify-between gap-4 border border-gray-700">
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => onGenerateArray()}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded cursor-pointer"
        >
          Generate Array
        </button>

        <button
          onClick={onStart}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded cursor-pointer"
          disabled={isSorting}
        >
          Start
        </button>

        <button
          onClick={onReset}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded cursor-pointer"
        >
          Reset
        </button>

        <button
          onClick={onShowSnippet}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
        >
          <FaCode />
          Code
        </button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="algorithm">Algorithm:</label>
        <div className="relative">
          <select
            id="algorithm"
            value={selectedAlgorithm}
            onChange={(e) => setSelectedAlgorithm(e.target.value)}
            className="bg-gray-700 p-2 pr-8 rounded appearance-none focus:outline-none cursor-pointer"
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
            }}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="heap">Heap Sort</option>
            <option value="shell">Shell Sort</option>
          </select>
          <FaChevronDown
            className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={14}
          />
        </div>
        <button
          className="text-blue-400 hover:text-blue-300 transition cursor-pointer"
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

      {/* i button for information about the algorithm */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fade-in">
          <div className="relative max-w-md w-full rounded-2xl shadow-2xl bg-gradient-to-br from-[#232526] to-[#414345] border border-gray-700 p-8 animate-slide-up">
            <button
              className="absolute -top-5 -right-5 bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white rounded-full p-2 shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 z-20 scale-100 hover:scale-110 active:scale-95 border-2 border-gray-800"
              onClick={() => setShowInfo(false)}
              title="Close"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-2 text-blue-400 tracking-wide">
              <FaInfoCircle className="text-blue-400" /> {info.heading}
            </h2>
            <p className="text-base text-gray-200 mb-5 leading-relaxed font-medium">
              {info.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="font-semibold text-gray-300">Best Case</div>
                <div className="text-green-400 font-mono">
                  {info.complexity.best}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-300">Average Case</div>
                <div className="text-yellow-300 font-mono">
                  {info.complexity.average}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-300">Worst Case</div>
                <div className="text-red-400 font-mono">
                  {info.complexity.worst}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-300">Space</div>
                <div className="text-blue-300 font-mono">
                  {info.complexity.space}
                </div>
              </div>
            </div>
            {info.notes && (
              <div className="mt-2 text-sm text-blue-200 bg-blue-900/30 rounded p-3 border border-blue-800">
                <span className="font-semibold">Note:</span> {info.notes}
              </div>
            )}
          </div>
          <style>{`
      .animate-fade-in {
        animation: fadeInBg 0.3s;
      }
      @keyframes fadeInBg {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-slide-up {
        animation: slideUp 0.35s cubic-bezier(.4,2,.6,1);
      }
      @keyframes slideUp {
        from { transform: translateY(40px) scale(0.98); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
    `}</style>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
