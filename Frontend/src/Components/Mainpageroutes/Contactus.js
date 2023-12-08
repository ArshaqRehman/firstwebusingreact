import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      screenshot: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data, e.g., send to a server

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      screenshot: null,
    });
  };

  return (<div>
<Header/>
<div style={{marginLeft: "15%", marginRight:" 10%"}}> 
    <div className="container mt-5" style={{marginBottom: "99px"}}>
      <h2>Contact Us</h2>

<p>
  Hello! We appreciate your interest in reaching out to us. Using our "Contact Us" feature is simple and straightforward. Start by filling out the form with your name and email address, allowing us to respond to your inquiry. Next, articulate your message in the designated text area, providing us with all the details you'd like to share. If you have a specific issue or query, please be as detailed as possible to help us better assist you.
</p>
<img src="contact-us.png" class="img-fluid" alt="..."></img>
<p>
  Additionally, if you have a screenshot related to your concern, feel free to attach it using the provided file input. This can be especially helpful if you're experiencing technical difficulties or want to illustrate a specific point.
</p>

<p>
  Once you've filled in the necessary information, click the "Submit" button. Our team will receive your message promptly and get back to you as soon as possible. Thank you for choosing to connect with us—we look forward to assisting you!
</p>


      <form >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
          
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            
           
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="screenshot" className="form-label">
            Submit your Cv:
          </label>
          <input
            type="file"
            id="screenshot"
            name="screenshot"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
