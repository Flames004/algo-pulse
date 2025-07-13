import { useState, useEffect, useCallback } from "react";
import ControlPanel from "./ControlPanel";
import { bubbleSort } from "../algorithms/sorting/bubbleSort";
import { selectionSort } from "../algorithms/sorting/selectionSort";
import { mergeSort } from "../algorithms/sorting/mergeSort";
import { insertionSort } from "../algorithms/sorting/insertionSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [arraySize, setArraySize] = useState<number>(50);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [barStates, setBarStates] = useState<string[]>([]); // To track the state of each bar during sorting
  const [speed, setSpeed] = useState<number>(100); // Speed of sorting visualization

  const generateArray = useCallback(
    (length = arraySize, min: number = 10, max: number = 300) => {
      const newArray = Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
      console.log("Generated Array:", newArray);
      setArray(newArray);
      setBarStates(Array(length).fill("normal")); // Reset bar states
    },
    [arraySize]
  );

  useEffect(() => {
    generateArray();
  }, [arraySize, generateArray]); // Regenrate array when slider changes

  // Function to start sorting
  const handleUpdate = (updatedArray: number[], updatedStates: string[]) => {
    setArray(updatedArray);
    setBarStates(updatedStates);
  };

  const startSort = async () => {
    setIsSorting(true);
    if (selectedAlgorithm === "bubble") {
      await bubbleSort(array, handleUpdate, speed);
    } else if (selectedAlgorithm === "selection") {
      await selectionSort(array, handleUpdate, speed);
    } else if (selectedAlgorithm === "merge") {
      await mergeSort(array, handleUpdate, speed);
    } else if (selectedAlgorithm === "insertion") {
      await insertionSort(array, handleUpdate, speed);
    }

    setIsSorting(false);
  };

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded">
      <ControlPanel
        onGenerateArray={() => generateArray()}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        arraySize={arraySize}
        setArraySize={setArraySize}
        onStart={startSort}
        isSorting={isSorting}
        speed={speed}
        setSpeed={setSpeed}
      />

      <div className="flex items-end h-80 w-full gap-[2px] mt-6 overflow-hidden">
        {array.map((value, idx) => {
          let color = "bg-blue-500"; // default
          if (barStates[idx] === "compare") color = "bg-yellow-400";
          else if (barStates[idx] === "swap") color = "bg-red-500";
          else if (barStates[idx] === "sorted") color = "bg-green-500";

          return (
            <div
              key={idx}
              className={`${color} rounded`}
              style={{
                height: `${value}px`,
                width: `${100 / array.length}%`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
