const mergeSort = async (array, setArray, speed, setHighlightedIndices) => {
  const merge = async (left, right, start) => {
    let result = [];
    let i = 0, j = 0;

    // Highlight both arrays being merged
    while (i < left.length && j < right.length) {
      setHighlightedIndices([start + i, start + left.length + j]); // Highlight based on the original array positions
      
      // Wait before comparing
      await new Promise((resolve) => setTimeout(resolve, speed));

      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }

      // Update the visualizer with the current merged state
      setArray((prevArray) => {
        const newArray = [...prevArray]; // Create a copy of the current array
        // Update only the part of the array that's currently merged
        for (let k = 0; k < result.length; k++) {
          newArray[start + k] = result[k]; // Update in the original position
        }
        return newArray;
      });

      // Delay to visualize the change
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    // Add remaining elements from either left or right
    while (i < left.length) {
      result.push(left[i++]);
    }
    while (j < right.length) {
      result.push(right[j++]);
    }

    return result; // Return the merged array
  };

  const sort = async (arr, start = 0) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = await sort(arr.slice(0, mid), start); // Pass the current start index
    const right = await sort(arr.slice(mid), start + mid); // Pass the updated start index

    // Merge the sorted halves and pass the current start index
    const mergedArray = await merge(left, right, start);
    
    // Final update of the entire array after sorting
    setArray((prevArray) => {
      const newArray = [...prevArray];
      for (let k = 0; k < mergedArray.length; k++) {
        newArray[start + k] = mergedArray[k]; // Update the original array
      }
      return newArray; // Return the updated array
    });

    return mergedArray; // Return the merged array for further processing
  };

  // Start the sorting process
  await sort(array);
};

export default mergeSort;
