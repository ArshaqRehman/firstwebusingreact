import { Link } from "react-router-dom";
function HeaderAdmin() {
    return (
      <div  >  
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/dashboard" >Dashboard</a>
              </li>
             
              
              
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" >Site Health</a>
              </li>
            </ul>
            
            
            <div style={{marginLeft: "280px" }}>
            <button type="button" class="btn btn-danger" style={{margin: "4px" }} >Add Post</button>
            <button type="button" class="btn btn-primary" style={{margin: "4px" }}>Insights </button>
            <Link to = "/Home">
            <button type="button" class="btn btn-success" style={{margin: "4px" }}>visit site</button>
            </Link>
            </div>
          </div>
          
        </div>
      
      </nav>
         </div>
  
      
    );
  }
  
  export default HeaderAdmin;
  