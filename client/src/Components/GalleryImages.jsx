
import { useState } from "react";
import "./GalleryImages.css";
import { Link } from "react-router-dom";
export const GalleryImages=({showImage,setShowImage, imageHandler, item})=>{
    



    return(
        <>
        {
            item && (<img className="image" onClick={()=>imageHandler(item)} src={`http://localhost:3006/image/${item}`} />)
        }
        </>
       
    )
}