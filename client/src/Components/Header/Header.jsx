import { useState } from "react";
import "./Header.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import axios from "axios";
export const Header = ({ setImages }) => {
  const [progress, setProgress] = useState(0);
  const [addimage, setAddimage] = useState();
  const [ImagePreview, setImagePreview] = useState();

  const fetchdata = async (addImageval) => {
    console.log("hiii");
    const formData = new FormData();
    formData.append("upload_file", addImageval);
    const resp = await axios("https://image-gallery-three-opal.vercel.app/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,

      onUploadProgress: (progressEvent) => {
        const prog = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setProgress(prog);

        if (prog === 100) {
          setTimeout(() => {
            setProgress(0);
          }, 400);
        }
      },
    });

    console.log("res", resp.data);

    setImages(resp.data);
  };

  const imageUpload = (e) => {
    console.log("img", e.target.files[0]);
    // setAddimage(e.target.files[0]);
    let addImageval = e.target.files[0];
    // setImagePreview(URL.createObjectURL(e.target.files[0]));
    fetchdata(addImageval);
  };

  return (
    <div className="header">
      <h2>Photo Gallery</h2>
      <p className="caption">A picture is worth thousand words</p>

      {progress <= 100 && progress > 0 ? (
        <>
          <div>{progress}%</div>
          <ProgressBar progress={progress} />
        </>
      ) : null}

      <div className="image-upload">
        <label htmlFor="file">
          <img src="/plus.png" />
        </label>
        <input id="file" accept="image/*" type="file" onChange={imageUpload} />
      </div>

      <span className="long-line"></span>
    </div>
  );
};
