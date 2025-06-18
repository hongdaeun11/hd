import { useEffect, useState, useRef } from "react";

function Two(){
    const [names, setNames] = useState([
        {id:1, text:"떡볶이"},
        {id:2, text:"피자"},
        {id:3, text:"감자탕"},
        {id:4, text:"불고기"},
    ])

    const cursor = useRef();
    
    useEffect(()=>{
        cursor.current.focus()
    },[])


    const [nextId, setNextId] = useState(5);
    const [newItem, setNewItem] = useState("");
    const inputText = (e) => {
        setNewItem(e.target.value)
    }

    const addItem = () => {
        if(newItem === ""){
            alert('내용을 입력하세요!!!')
        }else{
            // setNames(names.concat({id:nextId, text:newItem}))
            setNames([...names,{id:nextId, text:newItem}])
            setNewItem("")
            setNextId(nextId + 1)
        }
    }

    const deleteItem = (id) => {
        setNames(names.filter((item)=> item.id !== id))
                
    }

    return (
        <>
            <h1>동적 배열 렌더링</h1>
            <input type="text" onChange={inputText} value={newItem}
            ref={cursor}/>
            <button onClick={addItem}>add</button>
            {names.map((item)=>(
                <li key={item.id} onDoubleClick={()=>{deleteItem(item.id)}}>{item.text}</li>
            ))}
        </>
    )
}

export default Two;