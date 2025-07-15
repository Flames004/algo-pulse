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
  notes?: string;
};

const algoInfo: Record<AlgoKey, AlgoInfo> = {
  bubble: {
    heading: "Bubble Sort",
    description: "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It is simple but inefficient for large datasets.",
    complexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    notes: "Stable sort. Rarely used in practice except for educational purposes."
  },
  selection: {
    heading: "Selection Sort",
    description: "Selection Sort divides the array into a sorted and unsorted region, and repeatedly selects the smallest (or largest) element from the unsorted region to move to the sorted region.",
    complexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    notes: "Not stable. Performs well on small lists."
  },
  insertion: {
    heading: "Insertion Sort",
    description: "Insertion Sort builds the sorted array one item at a time by repeatedly inserting the next element into the correct position.",
    complexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    notes: "Stable sort. Efficient for small or nearly sorted datasets."
  },
  merge: {
    heading: "Merge Sort",
    description: "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, sorts each half, and merges them back together.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
    },
    notes: "Stable sort. Used in external sorting and linked lists."
  },
  quick: {
    heading: "Quick Sort",
    description: "Quick Sort picks a pivot element and partitions the array around the pivot, recursively sorting the partitions.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
      space: "O(log n)",
    },
    notes: "Not stable. Very fast in practice for large datasets."
  },
  heap: {
    heading: "Heap Sort",
    description: "Heap Sort builds a binary heap and repeatedly extracts the maximum element to sort the array.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(1)",
    },
    notes: "Not stable. Good for large datasets and in-place sorting."
  },
  shell: {
    heading: "Shell Sort",
    description: "Shell Sort is an optimization over Insertion Sort that allows the exchange of far apart elements using a gap sequence.",
    complexity: {
      best: "O(n log n)",
      average: "O(n^(3/2))",
      worst: "O(n²)",
      space: "O(1)",
    },
    notes: "Not stable. Gap sequence affects performance."
  },
};

export default algoInfo;
