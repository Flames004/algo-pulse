import type { BarUpdateCallback } from "./bubbleSort";

export const heapSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");
  const n = array.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, callback, states, speed);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    states[i] = "sorted";
    callback([...array], [...states]);
    await sleep(speed);

    await heapify(array, i, 0, callback, states, speed);
  }

  states[0] = "sorted"; // Mark last one
  callback([...array], [...states]);
};

const heapify = async (
  array: number[],
  heapSize: number,
  rootIndex: number,
  callback: BarUpdateCallback,
  states: string[],
  speed: number
) => {
  let largest = rootIndex;
  const left = 2 * rootIndex + 1;
  const right = 2 * rootIndex + 2;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== rootIndex) {
    [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];

    // Visualize comparison and swap
    states[rootIndex] = "swap";
    states[largest] = "swap";
    callback([...array], [...states]);
    await sleep(speed);

    states[rootIndex] = "normal";
    states[largest] = "normal";

    await heapify(array, heapSize, largest, callback, states, speed);
  }
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
