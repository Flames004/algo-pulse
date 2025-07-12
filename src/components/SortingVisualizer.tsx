import React, { useState, useEffect } from "react";

const SortingVisualizer = () => {
  // State to hold the array to be sorted
  const [array, setArray] = useState<number[]>([]);

  // Function to generate a new random array with a specified length and range
  const generateArray = (
    length: number = 50,
    min: number = 10,
    max: number = 300
  ) => {
    const newArray = Array.from(
      { length },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
    setArray(newArray);
  };

  // Generate a new array when the component mounts
  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-end h-80 w-full gap-1">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 w-[2%] rounded"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={() => generateArray()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Generate New Array
        </button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
