// import Header from "./Components/Header";
// import Content from "./Components/Content";
// import Footer from "./Components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import About from "./Components/About";
// import {Routes, Route} from "react-router-dom";
// import Privacypolicy from "./Components/Privacypolicy";
// import ContactUs from "./Components/Contactus";


// function MainPage() 
// {
//   return (


//     <div ClassName="Container fluid bg black" >

    
//     <div ClassName = "row"
//     style={{ height : "12vh", width : "212.2wh", color : "black"}}>
// <Header/>

//     </div >

//     <div ClassName = "row bg-black "
//     style={{ width : "212.2wh", color : "black", padding : "0px" , margin : "0px"}}>
      
//    <Routes>
//    <Route path="/" element= {<Content/>}/>
//    <Route path="/aboutUs" element= {<About/>}/>
//    <Route path="/privacypolicy" element= {<Privacypolicy/>}/>
//    <Route path="/contactus" element= {<ContactUs/>}/>
   
//    </Routes>

//    <div ClassName = "row"
//     style={{ height : "40vh", width : "212.2wh", background : "#23292f"}}>
    
//     <Footer/>
//     </div>
    
//     </div>

//     </div >

    



//   );
// }

// export default MainPage;


import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function MainPage() 
{                            
  return (


    <div >

    
<Header/>

    
    <Content/>

    
    
    <Footer/>
    </div>
    
    



  );
}

export default MainPage;
