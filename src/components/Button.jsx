function Button({number, setNumber}){
    return(
        <>
            <button onClick={()=>setNumber(number+1)} >+</button>
            <button onClick={()=>setNumber(number-1)} >-</button>
        </>
    )
}

export default Button;