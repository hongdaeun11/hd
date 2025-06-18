import { myContext } from "../context/myContext";
import { useContext } from "react";

function Six(){
    const {setTheme} = useContext(myContext);


    const themeColor = [
        {id:"pink", label:"가녀린 핑크"},
        {id:"skyblue", label:"시원한 하늘"},
        {id:"white", label:"베이직한 화이트"}
    ]
    const changeColor = (id) => {
        setTheme(id);
        themeColor.forEach((it)=> 
            it.id === id && console.log(`${it.label} 색상으로 변경 완료!`))
    }
    return (
        <>
            <h1>배경 색 지정하기</h1>
            <h3>Background Color Change!!</h3>
            {/* <button onClick={changeColor}>pink</button>
            <button>skyblue</button>
            <button>white</button> */}

            {themeColor.map((item)=>(
                <button key={item.id} onClick={()=>{changeColor(item.id)}}>{item.id}</button>
            ))}
        </>
    )
}

export default Six;