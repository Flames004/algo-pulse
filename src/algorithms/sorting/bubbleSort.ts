export type BarUpdateCallback = (arr: number[], barStates: string[]) => void;

export const bubbleSort = async (
  arr: number[],
  callback: BarUpdateCallback,
  speed: number = 50
) => {
  const array = [...arr];
  const states = new Array(array.length).fill("normal");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      states[j] = "compare";
      states[j + 1] = "compare";
      callback([...array], [...states]);
      await sleep(speed);

      if (array[j] > array[j + 1]) {
        states[j] = "swap";
        states[j + 1] = "swap";
        callback([...array], [...states]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        await sleep(speed);
        callback([...array], [...states]);
      }

      states[j] = "normal";
      states[j + 1] = "normal";
      callback([...array], [...states]);
    }

    states[array.length - i - 1] = "sorted";
    callback([...array], [...states]);
  }

  // final sorted
  callback([...array], new Array(array.length).fill("sorted"));
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
