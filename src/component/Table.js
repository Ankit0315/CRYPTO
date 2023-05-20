import React, { useEffect, useState } from "react";
import TableRow from "./TableRow"; 
import './Table.css'
function Table(props) {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []); 
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Image</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
