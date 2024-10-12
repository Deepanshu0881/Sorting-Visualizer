const bubbleSort = async (array, setArray, speed, setHighlightedIndices, setSwappedIndices) => {
  let arr = [...array];
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      setHighlightedIndices([j, j + 1]);

      await new Promise(resolve => setTimeout(resolve, speed));

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setSwappedIndices([j, j + 1]);
        setArray(arr);
      }

      setHighlightedIndices([]);
    }
  }
};

export default bubbleSort;
