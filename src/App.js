import React, { useState } from 'react';
import Visualizer from './components/Visualizer';
import Controls from './components/Controls';
import bubbleSort from './algorithms/bubbleSort';
import insertionSort from './algorithms/insertionSort';
import selectionSort from './algorithms/selectionSort';
import quickSort from './algorithms/quickSort';
import mergeSort from './algorithms/mergeSort';
import heapSort from './algorithms/heapSort';

const App = () => {
  const [arraySize, setArraySize] = useState(50);
  const [array, setArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [speed, setSpeed] = useState(100);
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [swappedIndices, setSwappedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const generateRandomArray = () => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 300) + 10);
    setArray(newArray);
    setHighlightedIndices([]);
    setSwappedIndices([]);
    setIsSorting(false); // Ensure sorting is reset
  };

  const startSorting = async () => {
    setHighlightedIndices([]);
    setSwappedIndices([]);
    setIsSorting(true); // Set sorting to true

    switch (selectedAlgorithm) {
      case 'bubbleSort':
        await bubbleSort(array, setArray, speed, setHighlightedIndices, setSwappedIndices);
        break;
      case 'insertionSort':
        await insertionSort(array, setArray, speed, setHighlightedIndices, setSwappedIndices);
        break;
      case 'selectionSort':
        await selectionSort(array, setArray, speed, setHighlightedIndices, setSwappedIndices);
        break;
      case 'quickSort':
        await quickSort(array, setArray, speed, setHighlightedIndices, setSwappedIndices);
        break;
      case 'mergeSort':
        await mergeSort(array, setArray, speed, setHighlightedIndices, setSwappedIndices);
        break;
      case 'heapSort':
        await heapSort(array, setArray, speed, setHighlightedIndices, setSwappedIndices);
        break;
      default:
        break;
    }

    setIsSorting(false); // Reset sorting to false
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">Sorting Algorithms Visualizer</h1>
      <Controls
        arraySize={arraySize}
        setArraySize={setArraySize}
        generateRandomArray={generateRandomArray}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        startSorting={startSorting}
        speed={speed}
        setSpeed={setSpeed}
        isSorting={isSorting}
      />
      <Visualizer array={array} highlightedIndices={highlightedIndices} swappedIndices={swappedIndices} />
    </div>
  );
};

export default App;
