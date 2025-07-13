import type { BarUpdateCallback } from "./bubbleSort";

export const insertionSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");

  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      states[j] = "compare";
      states[j - 1] = "compare";
      callback([...array], [...states]);
      await sleep(speed);

      [array[j], array[j - 1]] = [array[j - 1], array[j]];

      states[j] = "swap";
      states[j - 1] = "swap";
      callback([...array], [...states]);
      await sleep(speed);

      states[j] = "normal";
      states[j - 1] = "normal";
      j--;
    }

    // Optional: mark the inserted element as sorted for feedback
    states[i] = "sorted";
    callback([...array], [...states]);
  }

  // Final pass: mark all sorted
  callback([...array], new Array(array.length).fill("sorted"));
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
