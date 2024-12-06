import React from "react";

const DataSelector = ({ dataset, setDataset }) => {
  const options = ["headphones", "smartphones"]; // Add more as needed

  return (
    <div>
      <label htmlFor="dataset-select">Select Dataset:</label>
      <select
        id="dataset-select"
        value={dataset}
        onChange={(e) => setDataset(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DataSelector;
