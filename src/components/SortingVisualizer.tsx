import React, { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel";

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");

  const generateArray = (length: number = 50, min: number = 10, max: number = 300) => {
    const newArray = Array.from({ length }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
    console.log("Generated Array:", newArray);
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded">
      <ControlPanel
        onGenerateArray={generateArray}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />

      <div className="flex items-end h-64 w-full gap-1 mt-6">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 w-[2%] rounded"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
