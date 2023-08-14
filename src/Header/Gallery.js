// Gallery.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

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

    return (
        <div>
            <Header />
            <h3>갤러리</h3>
            <div className="container">
                {galleryList.map((gallery) => (
                    <Link key={gallery.id} to={`/gallerys/${gallery.id}`} className="link">
                        <img src={gallery.imageUrl} alt={gallery.title} className="image" />
                    </Link>
                ))}
            </div>   
            <button onClick={handleWriteClick}>글쓰기</button>         
        </div>
    );
};

export default Gallery;
