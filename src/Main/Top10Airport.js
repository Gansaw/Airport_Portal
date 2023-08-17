import React, { useState, useEffect } from 'react';
import style from '../Airport/Airport.module.css';

const Top10Airport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://10.125.121.186:8080/top10s";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response Error');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Fetch Error", error));
  }, []);

  // useEffect(() => {
  //   console.log('data',data)
  // }, [data])

  return (
    <div className={style.topdiv}>
      <h3>Top10 Airport (2023)</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Airport</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.rank}>
              <td>{item.rank}</td>
              <td>{item.airport}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Top10Airport;