// import Signup from "./SideMenuform/Singup";
// import HeaderAdmin from "./HeaderAdmin";
// import SidebarMenu from "./SidebarMenu";
// import {Route, Routes} from "react-router-dom";
// import Addpost from "./SideMenuform/Addpost";
// import Media from "./SideMenuform/Media";
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
//           <Route path ="/dashboard/addjob" element={<Addpost/>}/>
//           <Route path ="/dashboard/media" element={<Media/>}/>
//           <Route path ="/dashboard/pages" element={<Pages/>}/>
//           <Route path ="/dashboard/comments" element={<Comments/>}/>
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
import Dashboard from './SideMenuform/Dashboard';
import './Admin.css';
import Viewpost from "./SideMenuform/Viewpost";
import ManageUser from "./SideMenuform/ManageUser";
// function Admin() {
  

  

//   return (
//     <div className='grid-container'>
     
//       <HeaderAdmin/>
//       <SidebarMenu/>
//       {/* <Dashboard/> */}
//       <Routes>
//            <Route path="/dashboard" element={<Dashboard/>}/>
//            <Route path ="/dashboard/addpost" element={<Addpost/>}/>
//            <Route path ="/dashboard/viewpost" element={<Viewpost/>}/>
//            <Route path ="/dashboard/manageuser" element={<ManageUser/>}/>
//            <Route path ="/dashboard/comments" element={<Comments/>}/>
//            <Route path ="/dashboard/appearence" element={<Appearence/>}/>
//            <Route path ="/dashboard/tools" element={<Tools/>}/>
//            <Route path ="/dashboard/settings" element={<Settings/>}/>
//      </Routes>
//   {/* <Signup/> */}
//     </div>
//   )
// }

// export default Admin;

function Admin() 
{
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{ marginLeft:"15rem", height: "10vh" }}
      >
     
       
        <HeaderAdmin/>
      </div>
      <div className="row ">
        <div
          className="col-md-2 "
          style={{marginTop:"-7rem", marginLeft:"-2vh", height: "80rem",width:"17rem",display:"grid"}}
        >
          <SidebarMenu />
        </div>
        <div
          className="col-md-9"
          style={{  height: "100%"}}
        >
          <Routes>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path ="/dashboard/addpost" element={<Addpost/>}/>
           <Route path ="/dashboard/viewpost" element={<Viewpost/>}/>
           <Route path ="/dashboard/manageuser" element={<ManageUser/>}/>
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