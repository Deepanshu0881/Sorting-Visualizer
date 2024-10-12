const quickSort = async (array, setArray, speed, setHighlightedIndices, setSwappedIndices) => {
  const sort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await sort(arr, low, pi - 1);
      await sort(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high]; // Choosing the rightmost element as pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setHighlightedIndices([j, high]); // Highlighting current element and pivot
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setSwappedIndices([i, j]); // Highlight swapped elements
        setArray(arr);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap the pivot
    setSwappedIndices([i + 1, high]); // Highlight swapped pivot
    setArray(arr);
    await new Promise((resolve) => setTimeout(resolve, speed));
    setHighlightedIndices([]); // Reset highlighted indices
    return i + 1;
  };

  let arr = [...array];
  await sort(arr, 0, arr.length - 1);
};

  export default quickSort;