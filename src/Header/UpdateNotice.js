import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateNotice = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await fetch(`http://10.125.121.186:8080/notices/${id}`);
                if (!response.ok) {
                    throw new Error('Response Error');
                }
                const noticeData = await response.json();
                setData(noticeData);
            } catch (error) {
                console.error('Fetch Error', error);
            }
        };
        fetchNotice();
    }, [id]);

    const handleUpdateClick = async () => {
        try {
            const updatedData = {
                title: data.title,
                writer: data.writer,
                content: data.content,
                // Include other fields as needed
            };

            const url = `http://10.125.121.186:8080/updateNotice/${id}`;

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

            navigate('/notice');
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
            <h1>게시글 상세</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input
                                    name="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData({ ...data, title: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>글쓴이</td>
                            <td>
                                <input
                                    name="writer"
                                    type="text"
                                    value={data.writer}
                                    disabled
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea
                                    name="content"
                                    value={data.content}
                                    onChange={(e) => setData({ ...data, content: e.target.value })}
                                    cols="40"
                                    rows="10"
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>날짜</td>
                            <td>{formatTimestamp(data.date)}</td>
                        </tr>
                        <tr>
                            <td>조회수</td>
                            <td>{data.view}</td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={handleUpdateClick}>
                                    수정 완료
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UpdateNotice;
