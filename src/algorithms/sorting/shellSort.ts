import type { BarUpdateCallback } from "./bubbleSort";

export const shellSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");
  const n = array.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        states[j] = "compare";
        states[j - gap] = "compare";
        callback([...array], [...states]);
        await sleep(speed);

        array[j] = array[j - gap];
        states[j] = "swap";
        states[j - gap] = "swap";
        callback([...array], [...states]);
        await sleep(speed);

        states[j] = "normal";
        states[j - gap] = "normal";
        j -= gap;
      }

      array[j] = temp;
    }
  }

  // Final coloring
  callback([...array], new Array(n).fill("sorted"));
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
