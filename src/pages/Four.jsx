import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Four(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3002/data")
        .then((response)=>{
            setData(response.data)
        })
        .catch(()=>{
            alert('정보를 찾지 못함!')
            setData(undefined)
        })
    }, [])
    console.log(data)

    return(
        <>
            <h1>저장한 데이터 불러오기</h1>
            <h2>최근 작성한 내용</h2>
            {data.map((item,idx)=>(
                <li key={idx} style={{listStyle:"none"}}>
                    {item.id} : {item.text}</li>
            ))}
            <br />

            <Link to="/three" >내용 작성하러 가기!</Link>
        </>
    )
}

export default Four;