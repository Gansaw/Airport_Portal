import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteNotice = () => {
  const { id } = useParams();
  const navi = useNavigate();

  const handleDelete = async () => {
    try {
      await fetch(`http://10.125.121.186:8080/deleteNotice/${id}`, {
        method: 'DELETE',
      });
      navi('/notice'); // 삭제 후 공지 목록 페이지로 이동
    } catch (error) {
      console.error('Delete Error', error);
    }
  };

  return (
    <div>
      <h1>게시물 삭제</h1>
      <p>정말로 이 게시물을 삭제하시겠습니까?</p>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default DeleteNotice;
