import React, { useState } from 'react';
import Header from './Header';

const InsertGallery = () => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleWriterChange = (e) => {
        setWriter(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('writer', writer);
        formData.append('content', content);
        formData.append('file', file);

        try {
            const response = await fetch("http://10.125.121.186:8080/insertGallery", {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload Error');
            }

            setTitle('');
            setWriter('');
            setContent('');
            setFile(null);
        } catch (error) {
            console.error("Upload Error", error);
        }
    };

    return (
        <div>
            <Header />
            <h3>갤러리 등록</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" name="title" value={title} onChange={handleTitleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>작성자</td>
                            <td>
                                <input type="text" name="writer" value={writer} onChange={handleWriterChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea name="content" value={content} onChange={handleContentChange} cols="40" rows="10"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>첨부파일</td>
                            <td>
                                <input type="file" name="file" onChange={handleFileChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="새글 등록" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default InsertGallery;
