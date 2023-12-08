import React, { useContext } from 'react';
import { SecondCardContext } from './UseContext/Context';

function Card() {
  const {data1} = useContext(SecondCardContext)

  return (
    <div class="card-group container-fluid" style={{background:"#ecedf0"}}>
 <div style={{display: "flex",marginTop:"4px" , marginLeft:"20vh", marginRight:"20vh"}}>    
 {
    data1.map((item)=>
    <div class="card" style={{marginLeft:"1rem",marginBottom:"40px", marginTop:"10px" }}>
        <img src={item.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>

          <button type="button" class="btn btn-danger" style={{ margin: "4px" }}>Read More</button>
        </div>
      </div>
    )
    
}
</div>                
  </div>
  );
}

export default Card;





