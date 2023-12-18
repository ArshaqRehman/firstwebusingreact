 
import { UserModel } from "../Models/properDec.js";
 
 

 export const getUser = async (req,res)=>{
   try{
      const Items =await UserModel.find() 
       res.json(Items);
      console.log(Items);
   }
   catch(e){

       console.log("Error in the get Product", e);
   }
  
   
}


export const adduser = async (req, res) => {
   console.log("printing in add user controller")
   try {
     const { firstname,secondname,email,password,confirmpassword } = req.body;
     const newUser = new UserModel({ firstname,secondname,email,password,confirmpassword});
     const savedUser = await newUser.save();
     res.status(201).json(savedUser); // Send a response indicating success
   } catch (error) {
     console.error("Error adding user:", error);
     res.status(500).json({ message: "Failed to add user" }); // Send an error response
   }
 };


 export const getlogin=async(req , res)=>{

    try{
        const productdata=await UserModel.find();
         res.json(productdata);
         console.log(productdata)
    }
    catch (error){
    console.log("Not found in Data")
    
    }
    }





    export const deletelogin=async(req , res)=>{
        try{
            const {id} = req.params;
            console.log("delete products with id",id);
            await UserModel.findByIdAndDelete(id);
            res.json({message:"delete successfully"});
            res.status(500).json({error:"internal server error"})
    
        }
        catch (error){
            console.error("error delete products",error);
        }
    }
    





    export const updatelogin = async (req, res) => {
      
        const { id } = req.params;
        const { firstname,secondname,email,password,confirmpassword } = req.body;
        try {
          const updatedlogin = await UserModel.findByIdAndUpdate(
            id,
            { firstname,secondname,email,password,confirmpassword},
            { new: true }
          );
          if (updatedlogin) {
            res.sendStatus(204);
          } else {
            res.status(404).json({ error: 'login not found' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };


     