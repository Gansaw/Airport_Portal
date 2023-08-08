const getGalleryList = () =>{
    return(
<>
</>
    );

}

export default getGalleryList
 
// import React from 'react';

// const getNoticeList = ({ noticeList, nickname }) => {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const url = "http://localhost:8080/notices";

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Response Error');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setData(data);
//             })
//             .catch((error) => console.error("Fetch Error", error));
//     }, []);

//     const formatTimestamp = (timestamp) => {
//         const date = new Date(timestamp);
//         return date.toLocaleString();
//     };

//     const handleTitleClick = (id) => {
//         const url = `http://localhost:8080/getNotice?id=${id}`;
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Response Error');
//                 }
//                 return response.json();
//             })
//             .then((noticeData) => {
//                 console.log(noticeData);
//             })
//             .catch((error) => console.error("Fetch Error", error));
//     };


//     return (
//         <div>
//             <h1>게시글 목록</h1>
//             <h3>
//                 <h2>{nickname}님 게시판 입장을 환영합니다.</h2>
//             </h3>
//             <a href="/logout">로그아웃</a>
//             <hr />
//             <table>
//                 <tr>
//                     <th>번호</th>
//                     <th>제목</th>
//                     <th>글쓴이</th>
//                     <th>날짜</th>
//                     <th>조회수</th>
//                 </tr>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td onClick={() => handleTitleClick(item.id)} style={{ cursor: 'pointer' }}>{item.title}</td>
//                             <td>{item.writer}</td>
//                             <td>{formatTimestamp(item.date)}</td>
//                             <td>{item.view}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <br />
//             <a href="/insertNotice">새글 등록</a>
//         </div>
//     );
// };

// export default getNoticeList;
