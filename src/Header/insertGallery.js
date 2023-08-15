import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const InsertGallery = () => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleWriterChange = (e) => {
        setWriter(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title: title,
            writer: writer,
            content: content,
            imageUrl: imageUrl,
        };

        try {
            const response = await fetch("http://10.125.121.186:8080/insertGallery", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('갤러리에 성공적으로 등록되었습니다.');
                alert("갤러리가 등록되었습니다.")
                navi('/gallery');
            } else {
                console.error('갤러리 등록에 실패했습니다.');
            }
        } catch (error) {
            console.error('오류가 발생했습니다:', error);
        }
    }

    const navi = useNavigate();

    return (
        <div>
            <Header />
            <h3>갤러리 등록</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td><input type="text" name="title" value={title} onChange={handleTitleChange} /></td>
                        </tr>
                        <tr>
                            <td>작성자</td>
                            <td><input type="text" name="writer" value={writer} onChange={handleWriterChange} /></td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td><textarea name="content" value={content} onChange={handleContentChange} cols="40" rows="10"></textarea></td>
                        </tr>
                        <tr>
                            <td>이미지 URL</td>
                            <td><input type="text" name="imageUrl" value={imageUrl} onChange={handleImageUrlChange} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="새글 등록" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default InsertGallery;
