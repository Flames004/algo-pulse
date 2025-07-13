import type { BarUpdateCallback } from "./bubbleSort";

export const quickSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");

  await quickSortHelper(array, 0, array.length - 1, callback, states, speed);

  // Mark all as sorted
  callback([...array], new Array(array.length).fill("sorted"));
};

const quickSortHelper = async (
  array: number[],
  low: number,
  high: number,
  callback: BarUpdateCallback,
  states: string[],
  speed: number
) => {
  if (low < high) {
    const pivotIndex = await partition(array, low, high, callback, states, speed);

    await quickSortHelper(array, low, pivotIndex - 1, callback, states, speed);
    await quickSortHelper(array, pivotIndex + 1, high, callback, states, speed);
  } else if (low === high) {
    states[low] = "sorted";
    callback([...array], [...states]);
  }
};

const partition = async (
  array: number[],
  low: number,
  high: number,
  callback: BarUpdateCallback,
  states: string[],
  speed: number
): Promise<number> => {
  const pivot = array[high];
  states[high] = "compare"; // mark pivot
  let i = low - 1;

  for (let j = low; j < high; j++) {
    states[j] = "compare";
    callback([...array], [...states]);
    await sleep(speed);

    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      states[i] = "swap";
      states[j] = "swap";
      callback([...array], [...states]);
      await sleep(speed);
    }

    states[j] = "normal";
    states[i] = "normal";
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  states[high] = "normal";
  states[i + 1] = "sorted";

  callback([...array], [...states]);
  await sleep(speed);

  return i + 1;
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
