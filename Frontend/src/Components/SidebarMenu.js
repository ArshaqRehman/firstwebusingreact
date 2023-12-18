import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// function SidebarMenu() {
//     return (
//       <div class="card mt-3 bg-black" style={{ width: "18erm" , border :"none"}}>
       
//         <button class= "text-white bg-black"style={{height :"80px", border:"0px", fontSize : "15px" , fontWeight: "bold" }}>
//            Dashboard 
          
//         </button>
//         <Link to = "/dashboard/adduser">
//         <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>    
        
//   <button type="button" class="btn btn-secondary  bg-black" >
//     User Information
//   </button>
  
//    </div>
//   </Link>
//   <Link to = "/dashboard/addjob">
// <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black"aria-expanded="false">
//     Add Post
//   </button>
// </div>
// </Link>

// <Link to = "/dashboard/media">
// <div class="btn-group dropend" style={{ width: "220px", marginTop :"12px"  }}>
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
//     Post List
//   </button>
  

  
// </div>
// </Link>
// <Link to = "/dashboard/pages">
// <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black" aria-expanded="false">
//     Pages
//   </button>
  
  
  
// </div>
// </Link>
// <Link to = "/dashboard/comments">
// <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black" aria-expanded="false">
//     post list
//   </button>
  
 
  
// </div>
// </Link>
// <Link to = "/dashboard/appearence">
// <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
//     Appearence
//   </button>
  

// </div>

// </Link>
// <Link to = "/dashboard/tools">
// <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
//     Tools
//   </button>
  
 
  
// </div>
// </Link>
// <Link to = "/dashboard/settings">
// <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
//   <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
//     Settings
//   </button>
  
  
  
// </div>
// </Link>
        
//       </div>
//     );
//   }
  
//   export default SidebarMenu;
  
import React from 'react';

import 
{BsBriefcaseFill,BsFillCCircleFill  }
 from 'react-icons/bs';

function SidebarMenu() {
  return (
    <aside id="sidebar" >
        <div  style={{borderBlockEnd:"1px solid  rgba(255, 255, 255, 0.2)", height:"70px"}}>
            <div className='sidebar-brand'>
                <BsBriefcaseFill  className='icon_header '/> World Jobs
            </div>
            
        </div>

        <ul className='sidebar-list'>
        <div className='sidebar-list-item1'>MENU</div>
            <li className='sidebar-list-item'>
             <Link to= "/dashboard">
                <a >
                    Dashboard
                </a>
                </Link>
            </li>
            
            <li className='sidebar-list-item'>
                <Link to="/dashboard/addpost">
                <a >
                    
                    Add Post
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/dashboard/viewpost">   <a >View post</a> </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/dashboard/manageuser"> 
                <a>Manage User</a></Link>
            </li>
            <li className='sidebar-list-item'>
                <a >
                   Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a >
                     History
                </a>
            </li>
            <div style={{borderBlockEnd:"1px solid  rgba(255, 255, 255, 0.2)", height:"30px"}}>
            
            </div>
            <div className='sidebar-list-item1'>SUPPORT</div>
            <li className='sidebar-list-item'>
                <a >
                    Need Help?
                </a>
            </li >
            <li className='sidebar-list-item'>
                <a >
                    Contact Us
                </a>
            </li >
            <li className='sidebar-list-item'>
                <a >
                    Knownledge Base
                </a>
            </li >
            <div style={{borderBlockEnd:"1px solid  rgba(255, 255, 255, 0.2)", height:"70px",marginBottom:"20px"}}>
            </div>
           
           <div class="row" style={{width:"220px", height:"80px"}}>
    <div class="col"style={{width:"80px", height:"80px"}}>
    <img
        className='rounded-circle icon'
        src='p.jpg'
        alt=''
        style={{ width: '70px', height: '70px' }}
      />
    </div>
    <div class="row admin" style={{ marginTop:"-40px", marginLeft:"80px",height:"40px"}}>
     Admin
    </div>
    <div class="row admin1" style={{ marginTop:"-60px",marginLeft:"80px",height:"40px"}} >
    Arshaq Rehman
    </div>
  </div>
  <div style={{borderBlockEnd:"1px solid  rgba(255, 255, 255, 0.2)", height:"20px",marginBottom:"20px"}}>
            </div>
            <div className='admin1' style={{marginLeft:"20px", marginRight:"20px", marginBottom:"10px"}}>
           <BsFillCCircleFill   className='icon_header'/> WorldJobs.2024
           </div>
          <div className='admin' style={{marginLeft:"20px", marginRight:"20px"}}>
            worldjobs help workers find the best available remote and hybrid jobs for everyone
          </div>
        
        </ul>
    </aside>
  )
}

export default SidebarMenu;