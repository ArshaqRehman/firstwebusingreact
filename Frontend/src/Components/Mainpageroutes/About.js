import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  return (<>
    <Header/>
    <div  className = "container-fluid " >
    <div  style={{marginLeft: "15%", marginRight:" 10%"}}>
       
      <h2>About Us!</h2>

      <h3 style={{ textAlign: 'center' }}>
        Welcome To <span style={{ color: 'green' }}>World Jobs</span>
      </h3>

      <p>
        Hello, I'm Arshaq Rehman, and I'm thrilled to welcome you to{' '}
        <span style={{ fontWeight: 'bold' }}>World Jobs</span>. I call the
        picturesque city of Abbottabad in Khyber Pakhtunkhwa, Pakistan, my home.
        As the CEO of this website, it's my pleasure to introduce you to our
        dynamic platform dedicated to shaping the future of careers.
      </p>
      <img src="Aboutus.jpg" class="img-fluid" alt="..."></img>
      <p>
        <span style={{ fontWeight: 'bold' }}>World Jobs</span> is not just a
        platform; it's a vision fueled by the belief that everyone deserves
        the opportunity to find meaningful work and build a successful career.
        In the heart of our mission is the commitment to connect talent with
        the right opportunities and empower individuals to achieve their
        professional goals.
      </p>

      <p>
        My journey as the CEO has been driven by the desire to create a
        positive impact on the employment landscape. I understand the challenges
        job seekers face and the importance of providing a platform that
        simplifies the job search process while offering valuable resources
        for career growth.
      </p>

      <p>
        Our team at <span style={{ fontWeight: 'bold' }}>World Jobs</span> is
        passionate about curating content that matters. From the latest job
        listings to insightful articles on career development, we are
        dedicated to delivering a comprehensive experience for our users.
      </p>

      <p>
        I am committed to steering <span style={{ fontWeight: 'bold' }}>World Jobs</span> toward becoming a leading online destination
        for job seekers and employers alike. Your trust and engagement inspire
        us to continuously enhance our offerings and make a positive impact on
        the professional journeys of individuals worldwide.
      </p>

      <p>
        Thank you for being part of the <span style={{ fontWeight: 'bold' }}>World Jobs</span> community. Your success is our success,
        and together, we'll navigate the exciting and ever-evolving landscape
        of careers and opportunities.
      </p>

      <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
        Thanks For Visiting Our Site
        <br />
        <br />
        <span style={{ color: 'blue', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
          Have a nice day!
        </span>
      </p>
    </div>
    <Footer/>
    </div>
    
    </>
     
  );
};

export default About;


