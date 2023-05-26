import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import User from './User';
function Edit() {





    const [id,setId]=useState('');
    const [username,setusername]=useState('');
    const [DoB,setDoB]=useState('');
    const [Email,setEmail]=useState('');
    const [salary,setSalary]=useState(0);
    const [gender,setGender]=useState('');

useEffect(()=>{
  setId(localStorage.getItem('Id'))
  setusername(localStorage.getItem('username'))
  setDoB(localStorage.getItem('DoB'))
  setEmail(localStorage.getItem('Email'))
  setSalary(localStorage.getItem('salary'))
  setGender(localStorage.getItem('gender'))



},[])
console.log(id);
console.log(username);
console.log(DoB);
console.log(Email);
console.log(salary);
console.log(gender);


 var index = User.map(item=>item.id).indexOf(id);
 console.log(index);

  let history=useNavigate()
  const handleUpdate=(e)=>{
  e.preventDefault();
  console.log(e);
  let usr=User[index]
  console.log(usr);
  usr.id=id;
  usr.username=username;
  usr.DoB=DoB;
  usr.Email=Email;
  usr.salary=salary;
  usr.Gender=gender;

  console.log(usr);

  history('/')

 }



  return (
    <>
      <h1  className='text-primary text-center m-4'>Edit Your Details Here!</h1>
      
      <Row>
        <Col md={5}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGfa9cIG5USunpHOXJBzKEkfkQ2wAmmdJPS7C6LSfr_oJg_vHYf2NeJHJJ02OKC3wAWM&usqp=CAU" />
        </Col>

        <Col md={5}>
        <Form className='border border-3 p-5'>
        <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter your ID"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name"
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        required


        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="text" placeholder="Enter your Date of Birth "
        value={DoB}
        onChange={(e)=>setDoB(e.target.value)}
        required

        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter your Email id"
        value={Email}
        onChange={(e)=>setEmail(e.target.value)}
        required


        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary"
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required


        />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Enter your gender"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        required


        />
        </Form.Group>
      
      
      
      <Button variant="success" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
        </Col>
      </Row>

    </>

  )
}

export default Edit