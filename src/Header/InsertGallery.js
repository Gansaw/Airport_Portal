import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const InsertGallery = () => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [image_url, setImage_url] = useState('');

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
        setImage_url(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title: title,
            writer: writer,
            content: content,
            image_url: image_url,
        };

                // 제목, 내용 공백은 허용하지 않음
                if (title.trim() === '' || content.trim() === '' || image_url.trim() === '') {
                    alert('제목, 내용, 이미지주소는 필수 입력 사항입니다.');
                    return;
                }

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
                            <td><input type="text" name="image_url" value={image_url} onChange={handleImageUrlChange} /></td>
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
