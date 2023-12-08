
function Pages()
{return (
<div>
    <h2>Add Page</h2>
    <div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Page Tittle</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    
  </div>
</div>




<div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Page description</label>
  </div>
  <div class="col-auto" >
    <input type="password" id="inputPassword6" class="form-control" style={{width: "700px", height: "150px"}}/>
  </div>
  
</div>





<button type="button" class="btn btn-primary" style={{margin: "30px" }}>Add a Page </button>

</div>
);
}
export default Pages;