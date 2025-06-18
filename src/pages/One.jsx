import Button from "../components/Button";
import { useState } from "react";

function One(){
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>첫번째 페이지!</h1>
            <h3>버튼으로 숫자 컨트롤</h3>
            {number}<br/>
            <Button number={number} setNumber={setNumber} />
        </>
    )
}

export default One;