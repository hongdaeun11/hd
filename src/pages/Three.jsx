import View from '../components/View'
import { useState } from 'react';

function Three(){
    const [view, setView] = useState(false);
    return (
        <>
            <h1>데이터 저장</h1>
            <button onClick={()=>setView(!view)}>{view ? "닫기" : "보기"}</button>
            <br/>
            {view && <View />}
        </>
    )
}

export default Three;