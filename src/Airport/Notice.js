import React, { useState, useEffect } from 'react';
import style from './Airport.module.css';
const Notice = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/notices";

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

    return (
        <div className={style.nb}>
            <body>
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
                                <td>{item.title}</td>
                                <td>{item.writer}</td>
                                <td>{item.date}</td>
                                <td>{item.view}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </body>
        </div>

    );
}

export default Notice;