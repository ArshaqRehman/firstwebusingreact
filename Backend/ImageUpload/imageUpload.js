import multer from "multer";

const imgConfig=multer.diskStorage({



destination:(req,file,callBack)=>{
   console.log("I am i destination : ")
   callBack(null,"./uploads/")
   
},


filename:(req,file,callBack)=>{
   console.log(file);

   callBack(null,`image-${Date.now()}.${file.originalname}`)
}


})


const isImage=(req,file,callBack)=>{

   if (file.mimetype.startsWith("image")) {
       
       callBack(null,true)
   }else{

       callBack(new Error("Only Imge Allow here"))
   }
}

export const imageUpload=multer({

   storage:imgConfig,
   fileFilter:isImage
});