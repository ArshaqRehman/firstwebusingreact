import { JobModel1 } from "../Models/JobsModel.js";

export const getJob = async (req, res)=>{
    try {
    
        const job = await JobModel1.find();
        console.log(job);
        res.json(job);
    } catch (error) {
        console.log("error"+ error);
    }
}

export const addjob= async(req,res)=>{
    
        const{tittle,description,pic}=req.body;
        try{
            const newProduct=new JobModel1({
                tittle,
                description,
                pic
            
            });
            const savedproducts=await newProduct.save();
            console.log(savedproducts);
            res.json({Response:true,message:"Your job is posted"});
            console.log("Your job is posted");
        }
        catch(error){
            console.error(error);
        }
    }

    export const deletejob =async(req , res)=>{
    try{
        const {id} = req.params;
        console.log("delete products with id",id);
        await JobModel1.findByIdAndDelete(id);
        res.json({message:"delete successfully"});
        res.status(500).json({error:"internal server error"})

    }
    catch (error){
        console.error("error delete job",error);
    }
}

export const updatejob = async (req, res) => {
  console.log("updated");
        const { id } = req.params;
        const { tittle, description,pic } = req.body;
        try {
          const updatedProduct = await JobModel1.findByIdAndUpdate(
            id,
            { tittle, description , pic},
            { new: true }
          );
          if (updatedProduct) {
            res.sendStatus(204);
          } else {
            res.status(404).json({ error: 'Product not found' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };

