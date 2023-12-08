// import Signup from "./Singup";
// import HeaderAdmin from "./HeaderAdmin";
// import SidebarMenu from "./SidebarMenu";
// import {Route, Routes} from "react-router-dom";
// import Addpost from "./SideMenuform/Addpost";

// import Pages from "./SideMenuform/pages";
// import Appearence from "./SideMenuform/Appearence";
// import Tools from "./SideMenuform/Tools";
// import Settings from "./SideMenuform/Settings";
// import Comments from "./SideMenuform/Comments";
// function Admin() 
// {
//   return (
//     <div className="container-fluid">
//       <div
//         className="row "
//         style={{ height: "10vh" }}
//       >
     
       
//         <HeaderAdmin/>
//       </div>
//       <div className="row " style={{  height: "90vh" }}>
//         <div
//           className="col-md-2 bg-black"
//           style={{  height: "90vh"}}
//         >
//           <SidebarMenu />
//         </div>
//         <div
//           className="col-md-10"
//           style={{  height: "100%" }}
//         >
//          <Routes>
//           <Route path="/dashboard/adduser" element={<Signup/>}/>
//           <Route path ="/dashboard/addpost" element={<Addpost/>}/>
          
//           <Route path ="/dashboard/pages" element={<Pages/>}/>
//           <Route path ="/dashboard/list" element={<Comments/>}/>
//           <Route path ="/dashboard/appearence" element={<Appearence/>}/>
//           <Route path ="/dashboard/tools" element={<Tools/>}/>
//           <Route path ="/dashboard/settings" element={<Settings/>}/>
         
//          </Routes>
         
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import Signup from "./SideMenuform/Singup";
import HeaderAdmin from "./HeaderAdmin";
import SidebarMenu from "./SidebarMenu";
import {Route, Routes} from "react-router-dom";
import Addpost from "./SideMenuform/Addpost";
import Media from "./SideMenuform/Media";
import Pages from "./SideMenuform/pages";
import Appearence from "./SideMenuform/Appearence";
import Tools from "./SideMenuform/Tools";
import Settings from "./SideMenuform/Settings";
import Comments from "./SideMenuform/Comments";
function Admin() 
{
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{ height: "10vh" }}
      >
     
       
        <HeaderAdmin/>
      </div>
      <div className="row " style={{  height: "90vh" }}>
        <div
          className="col-md-2 bg-black"
          style={{  height: "90vh"}}
        >
          <SidebarMenu />
        </div>
        <div
          className="col-md-10"
          style={{  height: "100%" }}
        >
         <Routes>
          <Route path="/dashboard/adduser" element={<Signup/>}/>
          <Route path ="/dashboard/addjob" element={<Addpost/>}/>
          <Route path ="/dashboard/media" element={<Media/>}/>
          <Route path ="/dashboard/pages" element={<Pages/>}/>
          <Route path ="/dashboard/comments" element={<Comments/>}/>
          <Route path ="/dashboard/appearence" element={<Appearence/>}/>
          <Route path ="/dashboard/tools" element={<Tools/>}/>
          <Route path ="/dashboard/settings" element={<Settings/>}/>
         </Routes>
         
        </div>
      </div>
    </div>
  );
}

export default Admin;
