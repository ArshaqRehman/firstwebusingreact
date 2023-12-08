import { useState } from "react";
import { addjob } from "../Services/api";

function Addpost() {
  const [userData, setUserData] = useState({
    tittle: "",
    description: "",
    pic: ""
  });

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
    <div>
      <h2>Add Post</h2>
      <div className="row g-3 align-items-center" style={{ marginTop: "25px" }}>
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
