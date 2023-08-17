import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import style from '../Airport/Airport.module.css'

const Gallery = () => {
    const [galleryList, setGalleryList] = useState([]);

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
                setGalleryList(data);
            })
            .catch((error) => console.error("Fetch Error", error));
    }, []);

    const navigate = useNavigate();

    const handleWriteClick = () => {
        navigate('/insertGallery');
    };  

    // 이미지 배열을 행과 열로 나누는 함수
    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    // 각 행에 대한 컨테이너 생성
    const renderRow = (row) => (
        <div className="row">
            {row.map((gallery) => (
                <Link key={gallery.id} to="#" className="link" onClick={(e) => e.preventDefault()}>
                    <img src={gallery.image_url} alt={gallery.title} className="image"
                        style={{ width: '300px', height: '200px', margin: '10px' }} />
                </Link>
            ))}
        </div>
    );

    const chunkedGalleryList = chunkArray(galleryList, 3);    

    return (
        <div>
            <Header />
            <h3>갤러리</h3>
            <div className="container">
                {chunkedGalleryList.map((row, index) => (
                    <div key={index}>{renderRow(row)}</div>
                ))}
            </div>
            <button className={style.bt1} onClick={handleWriteClick}>글쓰기</button>
        </div>
    );
};

export default Gallery;
