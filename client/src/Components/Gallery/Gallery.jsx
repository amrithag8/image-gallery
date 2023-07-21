import "./Gallery.css";
import { GalleryImages } from "../GalleryImages";
export const Gallery=({images, setShowImage, showImage, imageHandler})=>{

    
    return(
        <div className="gallery">
            {
images.map((item)=>{
    
    return <GalleryImages item={item} showImage={showImage} setShowImage={setShowImage} imageHandler={imageHandler}/>
})
            }
            
            
        </div>
    )
}