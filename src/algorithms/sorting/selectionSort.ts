import type { BarUpdateCallback } from "./bubbleSort";

export const selectionSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    states[minIndex] = "compare";
    callback([...array], [...states]);
    await sleep(speed);

    for (let j = i + 1; j < array.length; j++) {
      states[j] = "compare";
      callback([...array], [...states]);
      await sleep(speed);

      if (array[j] < array[minIndex]) {
        states[minIndex] = "normal"; // unmark old min
        minIndex = j;
        states[minIndex] = "compare";
        callback([...array], [...states]);
        await sleep(speed);
      }

      states[j] = "normal";
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      states[i] = "swap";
      states[minIndex] = "swap";
      callback([...array], [...states]);
      await sleep(speed);
    }

    states[i] = "sorted";
    callback([...array], [...states]);
  }

  callback([...array], new Array(array.length).fill("sorted"));
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
