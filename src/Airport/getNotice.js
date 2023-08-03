import React, { useState, useEffect } from 'react';

const GetNotice = ({ notice }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = `http://localhost:8080/notices/${notice.id}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response Error');
                }
                return response.json();
            })
            .then((noticeData) => {
                setData(noticeData);
            })
            .catch((error) => console.error("Fetch Error", error));
    }, [notice.id]);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };
  
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid">
            <div className="title">
                <h1>게시글 상세</h1>
            </div>
            <form action="/updateNotice" method="post">
                <input name="id" type="hidden" value={data.id} />
                <table>
                    <tr>
                        <td>제목</td>
                        <td><input name="title" type="text" defaultValue={data.title} /></td>
                    </tr>
                    <tr>
                        <td>글쓴이</td>
                        <td><input name="writer" type="text" defaultValue={data.writer} /></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name="content" defaultValue={data.content} cols="40" rows="10"></textarea></td>
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
                            <input type="submit" value="게시물 수정" />
                        </td>
                    </tr>
                </table>
            </form>
            <a href="/insertNotice">게시물 등록</a>&nbsp;&nbsp;&nbsp;
            {sessionStorage.getItem('member').role === 'ROLE_ADMIN' && (
                <a href={`/deleteNotice?id=${data.id}`}>게시물 삭제</a>
            )}&nbsp;&nbsp;&nbsp;
            <a href="/getNoticeList">게시물 목록</a>
        </div>
    );
};

export default GetNotice;
