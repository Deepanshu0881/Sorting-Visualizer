import React from 'react';

const Visualizer = ({ array, highlightedIndices, swappedIndices }) => {
  return (
    <div className="flex items-end justify-center h-96">
      {array.map((value, index) => {
        let backgroundColor = 'bg-blue-500'; // Default color

        if (highlightedIndices.includes(index)) {
          backgroundColor = 'bg-yellow-500'; // Highlighted color for comparing
        }
        if (swappedIndices.includes(index)) {
          backgroundColor = 'bg-red-500'; // Swapped color
        }

        return (
          <div
            key={index}
            className="flex flex-col items-center mx-1"
            style={{
              width: '30px', // Adjusted width to fit value text
            }}
          >
            {/* Display the value of the bar */}
            <span className="text-xs mb-1 text-gray-700">{value}</span> {/* Bar value displayed above */}
            
            <div
              className={`${backgroundColor} w-full`}
              style={{
                height: `${value}px`, // Adjust the height based on the value
                transition: 'height 0.3s ease', // Animation for height and color change
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Visualizer;
