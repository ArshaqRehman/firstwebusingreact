

import React, { useContext } from 'react';
import { SecondCardContext } from './UseContext/Context';

import Side from './Side';

function SecondCard() {
  const { data } = useContext(SecondCardContext);

  return (

<div class="row" style={{ background: "#ecedf0",marginTop: "-30px"}}>
  <div class="col-md-8"  >
  {data.map((item) => (
        <div className="row g-0" style={{ marginTop: "30px", background: "white", width:"55rem" , marginLeft:"5px"}}>
          <div className="col-md-4">
            <img src={item.img} style={{ height: "200px", width: "265px", marginLeft:"5px"}} className="img-fluid rounded-start" alt="Placeholder Image" />
          </div>
          <div className="col-md-8" >
            <div className="card-body" style={{margin:"10px"}}>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
             
              <button type="button" className="btn btn-danger" style={{ margin: "4px" }}>Apply now</button>
              <button type="button" className="btn btn-info" style={{ margin: "4px" }}>More Details</button>
              
            </div>
          </div>
        </div>
      ))}
  </div>
  <div class="col-md-4">
 <Side/>
  </div>
</div>







  );
}

export default SecondCard;

