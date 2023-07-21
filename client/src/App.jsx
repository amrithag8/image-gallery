import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Header } from './Components/Header/Header';
import { Gallery } from './Components/Gallery/Gallery';
import axios from "axios";
import { Modal } from './Components/Modal/Modal';
import {Routes, Route} from "react-router-dom";


function App() {
  const [images, setImages] = useState([]);
  const[showImage, setShowImage]=useState(false);
  const[selectedImage, setSelectedImage]=useState();

  const imageHandler=(item)=>{
    
    setSelectedImage(item);
    setShowImage(true);
    
}

const closeHandler=()=>{
  setShowImage(false);
}



  useEffect(()=>{
    const fetchImages=async()=>{
      const res=await axios("https://image-gallery-three-opal.vercel.app/");
      setImages(res.data);
    }


    fetchImages();
  }, []);

  
  return (
    <>
      
       {
        (!showImage)&&(
        <>
        <Header setImages={setImages}/>

        <Gallery images={images} showImage={showImage} setShowImage={setShowImage} imageHandler={imageHandler}/>
        </>)
       } 


{showImage&&     
<Modal>
<div className='close' onClick={closeHandler}>X</div>
            <img src={`http://localhost:3006/image/${selectedImage}`}/>
            
          
        </Modal>
}

        

        
    </>
  )
}

export default App
