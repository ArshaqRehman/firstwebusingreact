import MainPage from "./Components/Mainpageroutes/MainPage";
import Admin from "./Components/Admin";
import { Context } from "./Components/UseContext/Context";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Mainpageroutes/About";
import Privacypolicy from "./Components/Mainpageroutes/Privacypolicy";
import ContactUs from "./Components/Mainpageroutes/Contactus"
import Login from "./Components/Mainpageroutes/Login";
import Usersignup from "./Components/Mainpageroutes/Usersignup";
import ToplistedProfessionals from "./Components/Mainpageroutes/ToplistedProfessionals";
function App() {
  return (
    <Context> 
      <Routes>
        <Route path="/*" element={<Admin />} />
       
        <Route path="/home" element={<MainPage />} />
        <Route path="/Aboutus" element ={<About/>}/>
        <Route path="/privacypolicy" element= {<Privacypolicy/>}/>
   <Route path="/contactus" element= {<ContactUs/>}/>
   <Route path="/ToplistedProfessionals" element= {<ToplistedProfessionals/>}/>
   <Route path="/login" element= {<Login/>}/>
   <Route path="/usersignup" element= {<Usersignup/>}/>
      </Routes>
      {/* <Usersignup/> */}
    </Context>
  )
}

export default App;
