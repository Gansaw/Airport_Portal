import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GetGallery = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navi = useNavigate();

  const handleUpdateClick = () => {
    navi(`/updateGallery/${id}`);
  };

  const handleDeleteClick = () => {
    navi(`/deleteGallery/${id}`);
  };

  const handleListClick = () => {
    navi(`/gallery`);
  };

  useEffect(() => {
    const url = `http://10.125.121.186:8080/gallerys/${id}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response Error');
        }
        return response.json();
      })  
      .then((galleryData) => {
        setData(galleryData);
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
        <h1>사진 상세</h1>
      </div>
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
              <button type="button" onClick={handleUpdateClick}>갤러리 수정</button>
              <button type="button" onClick={handleDeleteClick}>갤러리 삭제</button>
              <button type="button" onClick={handleListClick}>갤러리 목록</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GetGallery;
