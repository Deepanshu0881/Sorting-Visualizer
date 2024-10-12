import React from 'react';

const Controls = ({ 
  arraySize, 
  setArraySize, 
  generateRandomArray, 
  selectedAlgorithm, 
  setSelectedAlgorithm, 
  startSorting, 
  speed, 
  setSpeed, 
  isSorting 
}) => {
  
  const handleReset = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="flex flex-col items-center mb-4 space-y-4">
      <button 
        className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg transition duration-300 hover:bg-blue-700 transform hover:scale-105" 
        onClick={generateRandomArray}
      >
        Generate New Array
      </button>
      
      <div className="flex mb-2 space-x-4 items-center">
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium">Algorithms</label>
          <select
            value={selectedAlgorithm}
            onChange={(e) => setSelectedAlgorithm(e.target.value)}
            className="border border-gray-300 rounded-md p-2 bg-white shadow-sm transition duration-200 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 h-10" // Adjust height
          >
            <option value="bubbleSort">Bubble Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="mergeSort">Merge Sort</option>
            <option value="heapSort">Heap Sort</option>
          </select>
        </div>
        
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium">Array Size</label>
          <input
            type="number"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 bg-white shadow-sm transition duration-200 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
            min="5"
            max="50"
          />
        </div>

        <div className="flex flex-col items-center">
          <label className="text-sm font-medium">Delay Speed(ms)</label>
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 bg-white shadow-sm transition duration-200 hover:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
            min="10"
            max="1000"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button 
          className="bg-green-600 text-white px-6 py-2 rounded-md shadow-lg transition duration-300 hover:bg-green-700 transform hover:scale-105" 
          onClick={startSorting} 
          disabled={isSorting}
        >
          Start
        </button>
        <button 
          className="bg-red-600 text-white px-6 py-2 rounded-md shadow-lg transition duration-300 hover:bg-red-700 transform hover:scale-105"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Controls;
