import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { deletejob, getJob,updatejob } from '../Services/api';

function Viewpost() {
    const [logindata, setlogindata] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedlogin, setSelectedlogin] = useState({});
    const [updatedlogin, setUpdatedlogin] = useState({
      tittle: "",
      description: "",
      image:""
      
    });
  
    useEffect(() => {
      getjobdata();
    },[]);
  
    const getjobdata = async () => {
      try {
        const result = await getJob();
        console.log(result.data);
        setlogindata(result.data);
      } catch (error) {
        console.log("Error ", error);
      }
    };
  
    const handleDeleteCustomer = async (id) => {
      try {
        
        await deletejob(id);
        
        const updated = logindata.filter((product) => product._id !== id);
        setlogindata(updated);
      } catch (error) {
        console.log("Error in deleting login", error);
      }
    };
  
    const handleShow = (product) => {
      setSelectedlogin(product);
      setUpdatedlogin({
        tittle:product.tittle,
        description:product.description
        

      });
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
       
        const id = selectedlogin._id;
        const updatedProduct = await updatejob (id, updatedlogin);
        console.log("Product updated:", updatedProduct);
        setShowModal(false);
        // Optionally, you can fetch updated data after a successful update
        getjobdata();
      } catch (error) {
        console.log("Error in updating product", error);
      }
    };
    return (

        <div style={{marginLeft:"5px", marginTop:"2rem"}}>
      <Table striped bordered hover>
        <thead>
          <th>Tittle</th>
          <th>Description</th>
          
         
        </thead>
        <tbody>
          {logindata.map((details, index) => (
            <tr key={index}>
              <td>{details.tittle}</td>
              <td>{details.description}</td>
              
              <td>
                 <button onClick={() => handleDeleteCustomer(details._id)} >Delete</button>
                 <br></br>
                <button onClick={()=>handleShow(details)}>Edit</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formProductName">
              <Form.Label>tittle</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.tittle}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, tittle: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.description}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, description: e.target.value })}
              />
            </Form.Group>
           
           
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    );
}
export default Viewpost;