function ImageCard({imagesrc}){
    const url = "http://localhost:5173"+imagesrc
    return (
        <>
            <img src={url} style={{width:"200px", height:"200px"}}/>
        </>
    )
}

export default ImageCard;
