const express=require("express");
const cors=require("cors");
const multer=require("multer");
const { v4: uuidv4 } = require("uuid");
const fs=require("fs");
// const imageArr=require("./imageGallery.json");

const app=express();
const imageArr=[];
const length=imageArr.length;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extension = file.originalname.split(".").pop();
        cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
      },
  })
  
  const upload = multer({ storage: storage })

app.get("/", (req, res)=>{
    
    res.json(imageArr);
})

app.post("/upload", upload.single("upload_file"), (req, res)=>{
console.log(req.file);
console.log(typeof(req.file.filename));

imageArr.push(req.file.filename);
console.log("array", imageArr);

// fs.writeFileSync("./imageGallery.json", JSON.stringify(imageArr));


res.json(imageArr)
})




app.listen(3006, console.log("Site started in 3006"));