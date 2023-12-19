import axios from 'axios';
const url = "https://firstwebusingreact-436k.vercel.app";


//user api

export const  addUser = async(userData) => {
  console.log("cls"+userData)
  return await axios.post(`${url}/usersignup`, userData);
}

export const getlogin=async ()=>{
  return await  axios.get(`${url}/dashboard/adduser`);
}

export const deleteCustomerbyid = async (id) => {
  return await axios.delete(`${url}/dashboard/adduser/${id}`);
};



export const updateloginById = async (id, updatedProduct) => {
   return await axios.put(`${url}/dashboard/adduser/${id}`, updatedProduct);
}



// apii Admin
export const addjob= async (jobData)=>{
  return  await axios.post(`${url}/dashboard/addjob`, jobData);
 }

export const getJob= async ()=>{
  
  return await  axios.get(`${url}/dashboard/media`);
}

export const deletejob = async (id)=>{
 
   return await  axios.delete(`${url}/dashboard/media/${id}`);
 }


 export const updatejob = async (id, updatedProduct) => {
  
    return await axios.put(`${url}/dashboard/media/${id}`, updatedProduct);
};