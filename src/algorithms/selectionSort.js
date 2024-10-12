const selectionSort = async (array, setArray, speed, setHighlightedIndices, setSwappedIndices) => {
  let arr = [...array];
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      setHighlightedIndices([minIndex, j]); // Highlight the current min and j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      setArray(arr);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    
    // Swap if the minimum is not the current position
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setSwappedIndices([i, minIndex]); // Highlight swapped elements
      setArray(arr);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    setHighlightedIndices([]); // Reset highlighted indices
  }
};

  export default selectionSort;
  