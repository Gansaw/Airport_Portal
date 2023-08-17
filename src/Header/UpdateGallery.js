import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateGallery = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGalleryItem = async () => {
            try {
                const response = await fetch(`http://10.125.121.186:8080/gallerys/${id}`);
                if (!response.ok) {
                    throw new Error('Response Error');
                }
                const galleryItemData = await response.json();
                setData(galleryItemData);
            } catch (error) {
                console.error('Fetch Error', error);
            }
        };
        fetchGalleryItem();
    }, [id]);

    const handleUpdateClick = async () => {
        try {
            const updatedData = {
                title: data.title,
                description: data.description,
                image_url: data.image_url
            };

            const url = `http://10.125.121.186:8080/updateGallery/${id}`;

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Update Error');
            }

            navigate('/gallery');
        } catch (error) {
            console.error('Update Error', error);
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <div>
            <h1>갤러리 아이템 수정</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input name="title" type="text" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>설명</td>
                            <td>
                                <textarea
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData({ ...data, description: e.target.value })}
                                    cols="40"
                                    rows="5"
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>이미지 URL</td>
                            <td>
                                <input name="image_url" type="text" value={data.image_url} onChange={(e) => setData({ ...data, image_url: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>날짜</td>
                            <td>{formatTimestamp(data.date)}</td>
                        </tr>                        
                        <tr>
                            <td>
                                <button type="button" onClick={handleUpdateClick}>수정 완료</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UpdateGallery;
