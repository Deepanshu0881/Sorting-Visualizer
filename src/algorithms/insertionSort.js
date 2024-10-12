const insertionSort = async (array, setArray, speed, setHighlightedIndices, setSwappedIndices) => {
  let arr = [...array];
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      setHighlightedIndices([j, j + 1]); // Highlight the comparing elements
      arr[j + 1] = arr[j];
      setArray(arr);
      await new Promise((resolve) => setTimeout(resolve, speed));
      j--;
    }
    arr[j + 1] = key;
    setArray(arr);
    setSwappedIndices([j + 1]); // Highlight the inserted element
    await new Promise((resolve) => setTimeout(resolve, speed));
    setHighlightedIndices([]); // Reset highlighted indices
  }
};

  export default insertionSort;