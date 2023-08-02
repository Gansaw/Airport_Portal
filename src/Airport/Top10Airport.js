import React, { useState, useEffect } from 'react';
import style from './Airport.module.css';

const Top10Airport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/top10s";

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
    <div className={style.nb}>
      <h4>Top10 Airport</h4>
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