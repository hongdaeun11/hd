import ImageCard from "../components/ImageCard";
import ImageLabel from "../components/ImageLabel";
import { data } from "../database/data";

function Five(){

    return (
        <>
            <h1>이미지 불러오기</h1>
            {data.map((item)=>(
                <div key={item.id}>
                    <ImageCard imagesrc={item.imagepath} />
                    <ImageLabel imagelabel={item.label} />
                </div>
            ))}

        </>
    )
}

export default Five;