import axios from "axios";
import { useState } from "react";


function View(){
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value)
    }

    const saveText = () => {
        axios.post("http://localhost:3001/data",
            {id:new Date().toISOString().slice(0, 10), text}
        )
        .then(()=>{
            alert('데이터 저장 완료!')
            setText("")
        }) 
    }

    return (
        <>
            <textarea rows="20" cols="50" placeholder="무엇이든 작성해보세요" 
            value={text} onChange={onChange}/>
            <button onClick={saveText}>저장하기</button>
        </>
    )
}

export default View;
