
// import React, { useContext } from 'react';
// import { SecondCardContext } from '../UseContext/Context';



// function Comments() {
//   const { data , data1} = useContext(SecondCardContext);
//   const combinedArray = [...data, ...data1];
  
//   return (
//     <div className="card mb-3" style={{ background: "black", border: "10px solid black" }}>
//       {
      
//       combinedArray.map((item) => 
//         <div  className="row g-0" style={{ marginTop: "30px", background: "white", borderLeft: "20px solid black" }}>
              
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">{item.title}</h5>
//               <p className="card-text">{item.description}</p>
              
//               <button type="button" className="btn btn-danger" style={{ margin: "4px" }}>Edit</button>
//               <button type="button" className="btn btn-danger" style={{ margin: "4px" }}>Delete</button>
//               <button type="button" className="btn btn-danger" style={{ margin: "4px" }} >Update</button>

//             </div>
//           </div>
//         </div>
//       )
      
      
//       }
//     </div>
//   );
// }

// export default Comments;



import React, { useContext } from 'react';
import { SecondCardContext } from '../UseContext/Context';



function Comments() {
  const { data , data1} = useContext(SecondCardContext);
  const combinedArray = [...data, ...data1];
  
  return (
    <div className="card mb-3" style={{ background: "black", border: "10px solid black" }}>
      {
      
      combinedArray.map((item) => 
        <div  className="row g-0" style={{ marginTop: "30px", background: "white", borderLeft: "20px solid black" }}>
              
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              
              <button type="button" className="btn btn-danger" style={{ margin: "4px" }}>Edit</button>
              <button type="button" className="btn btn-danger" style={{ margin: "4px" }}>Delete</button>
              <button type="button" className="btn btn-danger" style={{ margin: "4px" }} >Update</button>

            </div>
          </div>
        </div>
      )
      
      
      }
    </div>
  );
}

export default Comments;