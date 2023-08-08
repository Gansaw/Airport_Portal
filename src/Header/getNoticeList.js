import React from 'react';

const getNoticeList = ({ noticeList, nickname }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://10.125.121.186:8080/notices";

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response Error');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Fetch Error", error));
    }, []);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    const handleTitleClick = (id) => {
        const url = `http://10.125.121.186:8080/notices?/${id}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response Error');
                }
                return response.json();
            })
            .then((noticeData) => {
                console.log(noticeData);
            })
            .catch((error) => console.error("Fetch Error", error));
    };

    return (
        <div>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td onClick={() => handleTitleClick(item.id)} style={{ cursor: 'pointer' }}>{item.title}</td>
                            <td>{item.writer}</td>
                            <td>{formatTimestamp(item.date)}</td>
                            <td>{item.view}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <a href="/insertNotice">새글 등록</a>
        </div>
    );
};

export default getNoticeList;
