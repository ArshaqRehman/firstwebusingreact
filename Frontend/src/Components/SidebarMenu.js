import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
function SidebarMenu() {
    return (
      <div class="card mt-3 bg-black" style={{ width: "18erm" , border :"none"}}>
       
        <button class= "text-white bg-black"style={{height :"80px", border:"0px", fontSize : "15px" , fontWeight: "bold" }}>
           Dashboard 
          
        </button>
        <Link to = "/dashboard/adduser">
        <div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>    
        
  <button type="button" class="btn btn-secondary  bg-black" >
    User Information
  </button>
  
   </div>
  </Link>
  <Link to = "/dashboard/addjob">
<div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black"aria-expanded="false">
    Add Post
  </button>
</div>
</Link>

<Link to = "/dashboard/media">
<div class="btn-group dropend" style={{ width: "220px", marginTop :"12px"  }}>
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
    Post List
  </button>
  

  
</div>
</Link>
<Link to = "/dashboard/pages">
<div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black" aria-expanded="false">
    Pages
  </button>
  
  
  
</div>
</Link>
<Link to = "/dashboard/comments">
<div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black" aria-expanded="false">
    post list
  </button>
  
 
  
</div>
</Link>
<Link to = "/dashboard/appearence">
<div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
    Appearence
  </button>
  

</div>

</Link>
<Link to = "/dashboard/tools">
<div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
    Tools
  </button>
  
 
  
</div>
</Link>
<Link to = "/dashboard/settings">
<div class="btn-group dropend" style={{ width: "220px" , marginTop :"12px" }}>
  <button type="button" class="btn btn-secondary dropdown-toggle bg-black"  aria-expanded="false">
    Settings
  </button>
  
  
  
</div>
</Link>
        
      </div>
    );
  }
  
  export default SidebarMenu;
  