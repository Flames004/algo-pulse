import { useState, useEffect, useCallback } from "react";
import ControlPanel from "./ControlPanel";

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [arraySize, setArraySize] = useState<number>(50);

  const generateArray = useCallback(
    (length = arraySize, min: number = 10, max: number = 300) => {
      const newArray = Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
      console.log("Generated Array:", newArray);
      setArray(newArray);
    },
    [arraySize]
  );

  useEffect(() => {
    generateArray();
  }, [arraySize, generateArray]); // Regenrate array when slider changes

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded">
      <ControlPanel
        onGenerateArray={generateArray}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        arraySize={arraySize}
        setArraySize={setArraySize}
      />

      <div className="flex items-end h-80 w-full gap-1 mt-6">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 rounded"
            style={{ height: `${value}px`, width: `${100 / array.length}%` }} // dynamic width based on array size
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
