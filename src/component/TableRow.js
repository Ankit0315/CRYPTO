import React from "react";

function TableRow(props) {
 
  const { id,name, symbol, image, current_price, total_volume } = props.data;
  return (
    <tr>
     <td>{name}</td>
    <td>{id}</td>
      <td><img src={image} alt={name} /></td>
      <td>{symbol}</td>
     <td style={current_price < 0 ? { color: "red" } : { color: "green" }}>{current_price}</td>
      <td>{total_volume}</td>
    </tr>
  );
}

export default TableRow;
