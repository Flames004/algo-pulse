export type AlgoKey =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick"
  | "heap"
  | "shell";

export type AlgoInfo = {
  heading: string;
  description: string;
  complexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
};

const algoInfo: Record<AlgoKey, AlgoInfo> = {
  bubble: {
    heading: "Bubble Sort",
    description: "Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
    },
  },
  selection: {
    heading: "Selection Sort",
    description: "Selection Sort finds the minimum element and moves it to the beginning.",
    complexity: {
      best: "O(n^2)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
    },
  },
  insertion: {
    heading: "Insertion Sort",
    description: "Insertion Sort builds the sorted array one item at a time.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
    },
  },
  merge: {
    heading: "Merge Sort",
    description: "Merge Sort divides the array into halves and merges them in sorted order.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
    },
  },
  quick: {
    heading: "Quick Sort",
    description: "Quick Sort picks a pivot and partitions the array around it.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n^2)",
      space: "O(log n)",
    },
  },
  heap: {
    heading: "Heap Sort",
    description: "Heap Sort uses a binary heap to sort elements efficiently.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(1)",
    },
  },
  shell: {
    heading: "Shell Sort",
    description: "Shell Sort is an optimization over Insertion Sort with gap sequences.",
    complexity: {
      best: "O(n log n)",
      average: "O(n^(3/2))",
      worst: "O(n^2)",
      space: "O(1)",
    },
  },
};

export default algoInfo;
