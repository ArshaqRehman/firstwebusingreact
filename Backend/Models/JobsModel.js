import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({
    
    tittle: String,
    description: String,
    image: {type: String,
        require:true,}
   
});



export const JobModel1 = mongoose.model("Job", JobsSchema);


