// Notice.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Notice = () => {
    const [data, setData] = useState([]);

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

    return (
        <div>
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
                            <td>{item.id} 상세</td>
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
        </div>
    );
};

export default Notice;