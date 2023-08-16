import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GetNotice = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navi = useNavigate();

  const handleUpdateClick = () => {
    navi(`/admin/updateNotice/${id}`);
  };

  const handleDeleteClick = () => {
    navi(`/admin/deleteNotice/${id}`);
  };

  const handleListClick = () => {
    navi(`/notice`);
  };

  useEffect(() => {
    const url = `http://10.125.121.186:8080/notices/${id}`;

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
      .catch((error) => {
        console.error("Fetch Error", error);
      });
  }, [id]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>게시글 상세</h1>
      </div>
      <form>
        <input name="id" type="hidden" value={data.id} />
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>{data.title}</td>
            </tr>
            <tr>
              <td>글쓴이</td>
              <td>{data.writer}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>{data.content}</td>
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
                <button type='button' onClick={handleUpdateClick}>게시물 수정</button>
                <button type='button' onClick={handleDeleteClick}>게시물 삭제</button>
                <button type='button' onClick={handleListClick}>게시물 목록</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>


    </div>
  );
};

export default GetNotice;
