import { useState } from "react";
import { addjob } from "../Services/api";

function Addpost() {
  const [userData, setUserData] = useState({
    tittle: "",
    description: "",
    pic: ""
  });
  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const { tittle, description, pic } = userData;

  const handleChange = (e) => {
    if (e.target.name === "pic") {
      setUserData({
        ...userData,
        pic: e.target.files[0]
      });
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting:", userData);
      await addjob(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{marginLeft:"50px",marginTop: "3rem"}}>
      <h2>Add Post</h2>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label>Post Title</label>
        </div>
        <div className="col-auto">
          <input
            name="tittle"
            id="tittle"
            type="text"
            className="form-control"
            onChange={(e) => handleChange(e)}
            value={tittle}
          />
        </div>
        <div className="col-auto"></div>
      </div>

      <div className="row g-3 align-items-center" style={{ marginTop: "25px" }}>
        <div className="col-auto">
          <label className="col-form-label">Post Description</label>
        </div>
        <div className="col-auto">
          <textarea
            name="description"
            id="description"
            className="form-control"
            onChange={(e) => handleChange(e)}
            style={{ width: "700px", height: "150px" }}
            value={description}
          ></textarea>
        </div>
      </div>
{/* 
      <div className="mb-3">
        <label htmlFor="pic" className="form-label">
          Upload Image
        </label>
        <input
          name="pic"
          id="pic"
          type="file"
          className="form-control"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => handleChange(e)}
        />
      </div> */}
      <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productImage"
            style={{ display: "block", fontWeight: "bold"  , color:"black"}}
          >
            Add Image:
          </label>
          <input
            type="file"
            name="productImage"
            id="productImage"
            onChange={handleImageChange}
            multiple
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>

      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: "30px" }}
        onClick={(e) => handleSubmit(e)}
      >
        Post a Job
      </button>
    </div>
  );
}

export default Addpost;
