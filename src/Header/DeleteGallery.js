import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteGallery = () => {
  const { id } = useParams();
  const navi = useNavigate();

  const handleDelete = async () => {
    try {
      await fetch(`http://10.125.121.186:8080/user/deleteGallery/${id}`, {
        method: 'DELETE',
      });
      navi('/gallery'); // 삭제 후 갤러리 목록 페이지로 이동
    } catch (error) {
      console.error('Delete Error', error);
    }
  };

  return (
    <div>
      <h1>갤러리 삭제</h1>
      <p>정말로 이 갤러리를 삭제하시겠습니까?</p>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default DeleteGallery;
