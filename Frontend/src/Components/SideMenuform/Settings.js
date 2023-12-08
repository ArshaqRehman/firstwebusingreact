function Settings()
{return (
<div>
    <h2>General settings</h2>
    <div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Website Tittle</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    
  </div>
</div>
<div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Website Url</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-30 characters long.
    </span>
  </div>
</div>



<div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Change description</label>
  </div>
  <div class="col-auto" >
    <input type="password" id="inputPassword6" class="form-control" style={{width: "400px", height: "150px"}}/>
  </div>
  
</div>



<div class="row g-3 align-items-center" style={{marginTop: "25px"}}>
  <div class="col-auto">
    <label for="website url" class="col-form-label">Admin Email Address</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

<button type="button" class="btn btn-primary" style={{margin: "30px" }}>Change Settings </button>

</div>





);
}
export default Settings;