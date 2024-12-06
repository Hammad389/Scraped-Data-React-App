import React from "react";

const Table = ({ data }) => {
  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Total Reviews</th>
        </tr>
      </thead>
      <tbody>
  {data.length > 0 ? (
    data.map((item, index) => (
      <tr key={index}>
        <td>
          <img src={item.image_link} alt={item.title} width="50" />
        </td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.total_reviews}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No data available</td>
    </tr>
  )}
</tbody>

    </table>
  );
};

export default Table;
