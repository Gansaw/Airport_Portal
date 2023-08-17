import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import style from '../Airport/Airport.module.css'

const Notice = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = "http://10.125.121.186:8080/notices";

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

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    const handleWriteClick = () => {
        navigate('/insertNotice');
    };

    return (
        <div>
            <Header />
            <h3>공지사항</h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">글쓴이</th>
                        <th scope="col">날짜</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>                                
                                <Link to={`/getNotice/${item.id}`} style={{ cursor: 'pointer' }}>
                                    {item.title}
                                </Link>
                            </td>
                            <td>{item.writer}</td>
                            <td>{formatTimestamp(item.date)}</td>
                            <td>{item.view}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className = {style.bt1} onClick={handleWriteClick}>글쓰기</button>
        </div>
    );
};

export default Notice;