import axios from 'axios';


//user api
const API=axios.create({
  baseURL: "https://firstwebusingreact-436k.vercel.app",
})

export const  addUser = async(userData) => {
  console.log("cls"+userData)
  return await API.post(`/usersignup`, userData);
}

export const getlogin=async ()=>{
  return await  API.get(`/dashboard/adduser`);
}

export const deleteCustomerbyid = async (id) => {
  return await API.delete(`/dashboard/adduser/${id}`);
};



export const updateloginById = async (id, updatedProduct) => {
   return await API.put(`/dashboard/adduser/${id}`, updatedProduct);
}



// apii Admin
export const addjob= async (jobData)=>{
  return  await API.post(`/dashboard/addjob`, jobData);
 }

export const getJob= async ()=>{
  
  return await  API.get(`/dashboard/media`);
}

export const deletejob = async (id)=>{
 
   return await  API.delete(`/dashboard/media/${id}`);
 }


 export const updatejob = async (id, updatedProduct) => {
  
    return await API.put(`/dashboard/media/${id}`, updatedProduct);
};