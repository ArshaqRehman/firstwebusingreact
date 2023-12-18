import { Link } from "react-router-dom";
// function HeaderAdmin() {
//     return (
//       <div  >  
//       <nav class="navbar navbar-expand-lg bg-body-tertiary" >
//         <div class="container-fluid">
//         {/* <a class="navbar-brand" href="#">Navbar</a> */}
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent" >
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="http://localhost:3000/dashboard" >Dashboard</a>
//               </li>
             
              
              
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#" >Site Health</a>
//               </li>
//             </ul>
            
            
//             <div style={{marginLeft: "280px" }}>
//             <button type="button" class="btn btn-danger" style={{margin: "4px" }} >Add Post</button>
//             <button type="button" class="btn btn-primary" style={{margin: "4px" }}>Insights </button>
//             <Link to = "/Home">
//             <button type="button" class="btn btn-success" style={{margin: "4px" }}>visit site</button>
//             </Link>
//             </div>
//           </div>
          
//         </div>
      
//       </nav>
//          </div>
  
      
//     );
//   }
  
//   export default HeaderAdmin;



import React from 'react';
import 
 { BsGear }
 from 'react-icons/bs';
 import { FaRegBell } from "react-icons/fa";

function HeaderAdmin() {
  return (
    <header className='header'>
       
        <div className='header-left' style={{color:"black"}}>
        <h2>Admin Dashboard</h2>
        </div>
        
          <div className='header-right'>
                    <Link to = "/Home">
            <button type="button" class="btn btn-success" style={{margin: "4px" }}>visit site</button></Link>
      <BsGear className='icon' />
      <FaRegBell className='icon' />

      <img
        className='rounded-circle icon'
        src='p.jpg'
        alt=''
        style={{ width: '50px', height: '50px' }}
      />
    </div>
    </header>
  );
}

export default HeaderAdmin;
  