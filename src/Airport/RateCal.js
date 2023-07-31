import { useEffect, useState } from "react";
import style from './Airport.module.css';
const Ratecal = () =>{
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('미국 달러'); // 초기값 미국 달러로 설정
    const [toCurrency, setToCurrency] = useState('한국 원');   // 초기값 한국 원으로 설정
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
  
    useEffect(() => {
      // 주소창에는 '-'없이 들어가야 하므로 replace를 사용하여 '-' 제거
      if (selectedDate) {
        getCurrencies(selectedDate.replace(/-/g, ''));
      }
    }, [selectedDate]);
  
    // 한국수출입은행에서 환율 API를 가져온다.
    const getCurrencies = (date) => {
      // 사용자 인증키
      const authkey = 'HlWURhHrKFNaWk9XUefBDxjER1bICokl';
    
      fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${date}&data=AP01`)
        .then(response => response.json())
        .then(data => {
            console.log('API response:', data);
          
          const currenciesData = data.map(item => ({
            cur_nm: item.cur_nm,
            cur_unit: item.cur_unit
          }));        
          // console.log('currenciesData:', currenciesData);
    
          setCurrencies(currenciesData);
        })
        .catch(error => console.log(error));
    };
    
  
    useEffect(() => {
      // 환율 정보가 없다면 => 작업 x
      if (currencies.length === 0) return;
    }, [fromCurrency, toCurrency, amount, currencies]);
  
    // 특정 나라에서
    const handleFromCurrencyChange = (e) => {
      setFromCurrency(e.target.value);
    };
  
    // 특정 나라로
    const handleToCurrencyChange = (e) => {
      setToCurrency(e.target.value);
    };
  
    // 변환하고 싶은 금액
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleConvert = () => {
      // 변환된 금액 계산
      const fromRate = parseFloat(currencies.find(currency => currency.cur_nm === fromCurrency)?.deal_bas_r.replace(/,/g, '') || 1);
      const toRate = parseFloat(currencies.find(currency => currency.cur_nm === toCurrency)?.deal_bas_r.replace(/,/g, '') || 1);
      setConvertedAmount((amount / fromRate) * toRate);
    };
  
    return (
      <div className={style.rb}>
        <h1>환율 계산기</h1>
        <div>
          <label>Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>
        <div>
          <label>From(~에서):</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map(currency => (
              <option key={currency.cur_nm} value={currency.cur_nm}>{currency.cur_nm}</option>
            ))}
          </select>
        </div>
        <div>
          <label>To(~으로):</label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map(currency => (
              <option key={currency.cur_nm} value={currency.cur_nm}>{currency.cur_nm}</option>
            ))}
          </select>
        </div>
        <div>
          <label>금액:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <button onClick={handleConvert}>변환</button>
        {convertedAmount !== 0 && <h2>적용 결과: {currencies.find(currency => currency.cur_nm === toCurrency)?.cur_unit} {convertedAmount.toFixed(2)}</h2>}
      </div>
    );
}

export default Ratecal;