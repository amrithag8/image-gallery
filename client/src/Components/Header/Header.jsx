import { useState } from "react";
import "./Header.css";
import axios from "axios";
export const Header=({setImages})=>{

    const[addimage, setAddimage]=useState();
    const[ImagePreview, setImagePreview]=useState();


    const fetchdata=async(addImageval)=>{
        console.log("hiii");
        const formData=new FormData();
        formData.append("upload_file", addImageval);
        const resp=await axios("http://localhost:3006/upload", {
    method:"POST",
    headers:{
        "Content-Type":"multipart/form-data",
    },
    data:formData,
});

console.log("res", resp.data)

setImages(resp.data);
    }
    


const imageUpload=(e)=>{
console.log("img", e.target.files[0]);
// setAddimage(e.target.files[0]);
let addImageval=e.target.files[0];
// setImagePreview(URL.createObjectURL(e.target.files[0]));
fetchdata(addImageval);
}




    return(

        <div className="header">
            <h2>Photo Gallery</h2>
            <p className="caption">A picture is worth thousand words</p>
           {/* {ImagePreview&& <img className="imagePrev" src={ImagePreview} /> } */}
           <div> <input type="file" accept="image/*" className="file" onChange={imageUpload}/></div>
            <img className="plus" src="/public/plus.png"/>
            <p>image.jpg</p>
            
            <span className="long-line"></span>

        </div>
    )
}