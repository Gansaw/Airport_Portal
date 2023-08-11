// Notice.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://10.125.121.186:8080/gallerys";

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
        <div>
            <Header />
            <h3>갤러리</h3>
            <table>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>                            
                            <td>
                                <Link to={`/gallerys/${item.content}`} style={{ cursor: 'pointer' }}>{item.title}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Gallery;