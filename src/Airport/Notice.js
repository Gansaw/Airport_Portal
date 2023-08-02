import style from './Airport.module.css';
const Notice = () => {

    return (

        
            <div className={style.nb}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">글쓴이</th>
                            <th scope="col">날짜</th>
                            <th scope="col">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>번호1</td>
                            <td>제목1</td>
                            <td>글쓴이1</td>
                            <td>날짜1</td>
                            <td>조회수1</td>
                        </tr>
                    </tbody>
                </table>
                <h5>글쓰기</h5> 
            </div>
        

    );
}

export default Notice;