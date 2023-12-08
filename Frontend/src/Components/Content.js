import Frontimage from "./Frontimage";
import Card from "./Card";
import CenterNav from "./CenterNav";
import SecondNav from "./SecondNav";
import SecondCard from "./SecondCard";
function Content ()
{
    return(
    
<div style={{background: "black", position:"relative"}}>
 <Frontimage/>
<CenterNav/>
  <Card/>
  
  <SecondNav/>
 <SecondCard/>
 <div style={{marginTop: "30px"}}><img src="image21.png" class="img-fluid" alt="..."></img></div>
 
</div>
);
}
export default Content;