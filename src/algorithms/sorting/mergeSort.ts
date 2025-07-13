import type { BarUpdateCallback } from "./bubbleSort";

export const mergeSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");

  await mergeSortHelper(array, 0, array.length - 1, callback, states, speed);

  // Final coloring
  callback([...array], new Array(array.length).fill("sorted"));
};

const mergeSortHelper = async (
  array: number[],
  left: number,
  right: number,
  callback: BarUpdateCallback,
  states: string[],
  speed: number
) => {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  await mergeSortHelper(array, left, mid, callback, states, speed);
  await mergeSortHelper(array, mid + 1, right, callback, states, speed);

  await merge(array, left, mid, right, array, callback, states, speed);
};

const merge = async (
  original: number[],
  left: number,
  mid: number,
  right: number,
  array: number[],
  callback: BarUpdateCallback,
  states: string[],
  speed: number
) => {
  let start1 = left;
  let start2 = mid + 1;
  const merged: number[] = [];

  while (start1 <= mid && start2 <= right) {
    states[start1] = "compare";
    states[start2] = "compare";
    callback([...array], [...states]);
    await sleep(speed);

    if (original[start1] <= original[start2]) {
      merged.push(original[start1++]);
    } else {
      merged.push(original[start2++]);
    }

    states[start1 - 1] = "normal";
    states[start2 - 1] = "normal";
  }

  while (start1 <= mid) {
    merged.push(original[start1++]);
  }

  while (start2 <= right) {
    merged.push(original[start2++]);
  }

  for (let i = 0; i < merged.length; i++) {
    array[left + i] = merged[i];
    states[left + i] = "swap"; // simulate overwrite
    callback([...array], [...states]);
    await sleep(speed);
    states[left + i] = "normal";
  }
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
