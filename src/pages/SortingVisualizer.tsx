import { useState, useEffect, useCallback } from "react";
import ControlPanel from "../components/ControlPanel";
import { bubbleSort } from "../algorithms/sorting/bubbleSort";
import { selectionSort } from "../algorithms/sorting/selectionSort";
import { mergeSort } from "../algorithms/sorting/mergeSort";
import { insertionSort } from "../algorithms/sorting/insertionSort";
import { quickSort } from "../algorithms/sorting/quickSort";
import { heapSort } from "../algorithms/sorting/heapSort";
import { shellSort } from "../algorithms/sorting/shellSort";
import PageWrapper from "../components/PageWrapper";
import CodeSnippet from "../components/CodeSnippet";
import { X } from "lucide-react";

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [arraySize, setArraySize] = useState<number>(50);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [barStates, setBarStates] = useState<string[]>([]);
  const [speed, setSpeed] = useState<number>(100);
  const [showSnippet, setShowSnippet] = useState(false);

  const generateArray = useCallback(
    (length = arraySize, min: number = 10, max: number = 300) => {
      const newArray = Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
      setArray(newArray);
      setBarStates(Array(length).fill("normal"));
    },
    [arraySize]
  );

  useEffect(() => {
    generateArray();
  }, [arraySize, generateArray]);

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
    } else if (selectedAlgorithm === "quick") {
      await quickSort(array, handleUpdate, speed);
    } else if (selectedAlgorithm === "heap") {
      await heapSort(array, handleUpdate, speed);
    } else if (selectedAlgorithm === "shell") {
      await shellSort(array, handleUpdate, speed);
    }
    setIsSorting(false);
  };

  const resetVisualizer = () => {
    setIsSorting(false);
    setSelectedAlgorithm("bubble");
    setSpeed(50);
    setArraySize(50);
    generateArray();
  };

  return (
    <PageWrapper>
      {/* App background */}
      <div className="w-full bg-gradient-to-br from-[#18191A] via-[#232526] to-[#232526] flex flex-col items-center py-8 px-2 transition-colors duration-300">
        {/* Sorting Visualizer Card */}
        <div className="w-full bg-gradient-to-br from-[#232526] to-[#414345] border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 mb-[13px] transition-all duration-300">
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
            onReset={resetVisualizer}
            onShowSnippet={() => setShowSnippet(true)}
          />

          {showSnippet && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 animate-fade-in">
              <div className="relative max-w-2xl w-full animate-slide-up">
                <button
                  className="absolute -top-5 -right-5 bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white rounded-full p-2 shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 z-20 scale-100 hover:scale-110 active:scale-95 border-2 border-gray-800"
                  onClick={() => setShowSnippet(false)}
                  aria-label="Close"
                  tabIndex={0}
                  style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.25)" }}
                >
                  <X size={22} />
                </button>
                <CodeSnippet algorithm={selectedAlgorithm as keyof typeof import("../data/algoSnippets").default} />
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

          {/* Sorting Bars */}
          <div className="flex items-end justify-center h-[350px] md:h-[420px] w-full gap-[2px] mt-8 overflow-x-auto bg-[#18191A] rounded-xl border border-gray-800 shadow-inner transition-all duration-300 px-3">
            {array.map((value, idx) => {
              let color = "bg-blue-500";
              if (barStates[idx] === "compare") color = "bg-yellow-400";
              else if (barStates[idx] === "swap") color = "bg-red-500";
              else if (barStates[idx] === "sorted") color = "bg-green-500";

              return (
                <div
                  key={idx}
                  className={`${color} rounded-t transition-all duration-300 ease-in-out`}
                  style={{
                    height: `${value}px`,
                    width: `${100 / array.length}%`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SortingVisualizer;
