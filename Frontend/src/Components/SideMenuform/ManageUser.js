import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { deleteCustomerbyid,getlogin,updateloginById } from '../Services/api';
function ManageUser() {
    const [logindata, setlogindata] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedlogin, setSelectedlogin] = useState({});
    const [updatedlogin, setUpdatedlogin] = useState({
      firstname: "",
      secondname: "",
      email: "",
      password: "",
      confirmpassword: ""
    });
  
    useEffect(() => {
      getCustomerDetail();
    },[]);
  
    const getCustomerDetail = async () => {
      try {
        const result = await getlogin();
        console.log(result.data);
        setlogindata(result.data);
      } catch (error) {
        console.log("Error ", error);
      }
    };
  
    const handleDeleteCustomer = async (id) => {
      try {
        await deleteCustomerbyid(id);
        const updated = logindata.filter((product) => product._id !== id);
        setlogindata(updated);
      } catch (error) {
        console.log("Error in deleting login", error);
      }
    };
  
    const handleShow = (product) => {
      setSelectedlogin(product);
      setUpdatedlogin({
        firstname:product.firstname,
        secondname:product.secondname,
        email:product.email,
        password:product.password,
        confirmpassword:product.confirmpassword

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
        const updatedProduct = await updateloginById(id, updatedlogin);
        console.log("Product updated:", updatedProduct);
        setShowModal(false);
        // Optionally, you can fetch updated data after a successful update
        getCustomerDetail();
      } catch (error) {
        console.log("Error in updating product", error);
      }
    };
    return (
               
        < div className="container-fluid flex"  style={{marginTop:"2rem"}}>
      <Table striped bordered hover>
        <thead >
          <th>FirstName </th>
          <th>LastName </th>
          <th>email </th>
          <th>password  </th>
         
        </thead>
        <tbody>
          {logindata.map((details, index) => (
            <tr key={index}>
              <td>{details.firstname}</td>
              <td>{details.secondname}</td>
              <td>{details.email}</td>
              <td>{details.password}</td>
              
              <td>
                 <button className=" btn-danger" onClick={() => handleDeleteCustomer(details._id)} >Delete</button>
                 <br></br>
                <button onClick={()=>handleShow(details)}>Edit</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formProductName">
              <Form.Label>First  Name</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.firstname}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, firstname: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.secondname}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, secondname: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.email}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.password}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, password: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    );
}
export default ManageUser;