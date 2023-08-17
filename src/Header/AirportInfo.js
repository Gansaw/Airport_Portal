import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const AirportInfo = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const location = useLocation();
    const urlSearchValue = new URLSearchParams(location.search).get('search') || '';

    useEffect(() => {
        const url = "http://10.125.121.186:8080/airports";

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response Error');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Fetch Error", error));
    }, []);

    useEffect(() => {
        // Combine URL search value and user-entered search value
        const combinedSearchValue = searchValue || urlSearchValue;

        // Filter the data based on the combined search value
        const lowerCaseSearchValue = combinedSearchValue.toLowerCase();
        const filtered = data.filter((airport) =>
            airport.code.toLowerCase().includes(lowerCaseSearchValue) ||
            airport.airportEng.toLowerCase().includes(lowerCaseSearchValue) ||
            airport.airportKor.toLowerCase().includes(lowerCaseSearchValue) ||
            airport.region.toLowerCase().includes(lowerCaseSearchValue) ||
            airport.nationEng.toLowerCase().includes(lowerCaseSearchValue) ||
            airport.nationKor.toLowerCase().includes(lowerCaseSearchValue) ||
            airport.city.toLowerCase().includes(lowerCaseSearchValue)
        );
        setFilteredData(filtered);
    }, [searchValue, data, urlSearchValue]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <Header />
            <h3>공항 리스트</h3>
            <input
                type="search"
                placeholder="검색할 내용을 입력하세요"
                value={searchValue}
                onChange={handleSearchChange}
            />
            <table>
                <thead>
                    <tr>
                        <th scope="col">코드</th>
                        <th scope="col">공항영문명</th>
                        <th scope="col">공항한글명</th>
                        <th scope="col">대륙</th>
                        <th scope="col">국가영문명</th>
                        <th scope="col">국가한글명</th>
                        <th scope="col">도시</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((airport) => (
                        <tr key={airport.code}>
                            <td>{airport.code}</td>
                            <td>{airport.airportEng}</td>
                            <td>{airport.airportKor}</td>
                            <td>{airport.region}</td>
                            <td>{airport.nationEng}</td>
                            <td>{airport.nationKor}</td>
                            <td>{airport.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AirportInfo;
