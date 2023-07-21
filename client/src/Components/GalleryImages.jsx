
import { useState } from "react";
import "./GalleryImages.css";
import { Link } from "react-router-dom";
export const GalleryImages=({showImage,setShowImage, imageHandler, item})=>{
    



    return(
        <>
        {
            item && (<img className="image" onClick={()=>imageHandler(item)} src={`https://image-gallery-three-opal.vercel.app/image/${item}`} />)
        }
        </>
       
    )
}