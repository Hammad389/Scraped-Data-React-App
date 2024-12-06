import React, { useEffect, useState } from 'react';
import './App.css'; // Importing the CSS file

function App() {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);  // To store the list of files
  const [selectedFile, setSelectedFile] = useState('');  // To store the selected file

  // Fetch the list of JSON files in the scraped_data folder
  useEffect(() => {
    // Assuming a static list of file names or getting them from a backend
    const jsonFiles = [
      "watches.json",  // Example file names
      "smartphones.json",
      "tablets.json",
      "laptops.json",
      "kitchen gadgets.json",
      "headphones.json",
      "fitness trackers.json",
      "chargers.json",
      "cameras.json"
    ];
    setFiles(jsonFiles);
  }, []);

  // Fetch data from the selected JSON file when the file changes
  useEffect(() => {
    if (selectedFile) {
      fetch(`/scraped_data/${selectedFile}`)  // Path to the selected file
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [selectedFile]);

  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <h1>Amazon Scraper Data</h1>
      </header>

      {/* Main content */}
      <div className="main-content">
        {/* Dropdown to select a file */}
        <div className="select-container">
          <select onChange={(e) => setSelectedFile(e.target.value)} value={selectedFile}>
            <option value="">Select a file</option>
            {files.map((file) => (
              <option key={file} value={file}>
                {file}
              </option>
            ))}
          </select>
        </div>

        {/* Render table only if data exists */}
        {data.length > 0 && (
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Total Reviews</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.total_reviews}</td>
                  <td>{item.price}</td>
                  <td>
                    <img src={item.image_link} alt={item.title} width={100} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Show message if no data available */}
        {data.length === 0 && selectedFile && <p>No data available for this file.</p>}
      </div>

      {/* Footer Section */}
      <footer>
        <p>Developed by Hammad</p>
      </footer>
    </div>
  );
}

export default App;
