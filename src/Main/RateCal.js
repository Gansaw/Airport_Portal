import React, { useEffect, useState } from "react";
import style from '../Airport/Airport.module.css';

const Ratecal = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("KRW"); // 변경된 기본값
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const url = "http://localhost:8080/rates";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response Error');
        }
        return response.json();
      })
      .then((data) => {
        setData(data || []);
      })
      .catch((error) => console.error("Fetch Error", error));
  }, []);


  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleCalculate = () => {
    const fromRate = data.find((item) => item.country === fromCurrency)?.rate;
    const toRate = data.find((item) => item.country === toCurrency)?.rate;

    if (fromRate && toRate && amount !== "") {
      const equivalent = ((amount / fromRate) * toRate).toFixed(2);
      setResult(equivalent);
    } else {
      setResult(null);
    }
  };

  return (
    <div className={style.ratediv}>
      <div>
        <h3>환율 계산기</h3>
        <label htmlFor="amount">환전할 금액:</label>
        <input
          type="number"
          id="amount"
          step="1"
          value={amount}
          onChange={handleAmountChange}
          placeholder="금액을 입력하세요"
        />

        <label htmlFor="toCurrency">환전할 통화:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          {data.map((item) => (
            <option key={item.id} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>

        <label htmlFor="fromCurrency">환전하려는 통화:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          {data.map((item) => (
            <option key={item.id} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>

        <button onClick={handleCalculate}>환전하기</button>

        {result !== null && (          
          <p>환전 결과: {result}</p>
        )}
      </div>
    </div>
  );
};

export default Ratecal;