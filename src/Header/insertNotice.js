import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const InsertNotice = () => {
    const navi = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const writer = '관리자';

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title: title,
            writer: writer,
            content: content
        };

        try {
            const response = await fetch('/insertNotice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('공지사항이 성공적으로 등록되었습니다.');
                alert("공지사항이 등록되었습니다.")
                navi('/notice');
            } else {
                console.error('공지사항 등록에 실패했습니다.');
            }
        } catch (error) {
            console.error('오류가 발생했습니다:', error);
        }
    };

    return (
        <div>
            <Header />
            <h3>공지사항 등록</h3>
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
                                <input type="text" name="writer" value={writer} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea name="content" value={content} onChange={handleContentChange} cols="40" rows="10"></textarea>
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

export default InsertNotice;
