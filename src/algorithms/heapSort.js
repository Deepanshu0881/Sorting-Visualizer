const heapSort = async (array, setArray, speed, setHighlightedIndices, setSwappedIndices) => {
  const heapify = async (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1; // left child
    let right = 2 * i + 2; // right child

    if (left < n) {
      setHighlightedIndices([i, left]); // Highlight current and left child
      if (arr[left] > arr[largest]) {
        largest = left;
      }
    }

    if (right < n) {
      setHighlightedIndices([largest, right]); // Highlight largest and right child
      if (arr[right] > arr[largest]) {
        largest = right;
      }
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setSwappedIndices([i, largest]); // Highlight swapped elements
      setArray(arr);
      await new Promise((resolve) => setTimeout(resolve, speed));
      await heapify(arr, n, largest);
    }
  };

  const sort = async (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setSwappedIndices([0, i]); // Highlight swapped elements
      setArray(arr);
      await new Promise((resolve) => setTimeout(resolve, speed));
      await heapify(arr, i, 0);
    }
  };

  let arr = [...array];
  await sort(arr);
  setArray(arr);
};

  export default heapSort;