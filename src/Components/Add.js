import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import User from './User';
import uuid from 'react-uuid';
   function Add() {

    const [id,setId]=useState('');
    const [username,setusername]=useState('');
    const [DoB,setDoB]=useState('');
    const [Email,setEmail]=useState('');
    const [salary,setSalary]=useState(0);
    const [gender,setGender]=useState('');

      
    const history=useNavigate()


     const handleAdd=(e)=>{
        e.preventDefault();
        let ids=uuid();
        console.log(ids);
        let uniqueid=ids.slice(0,8)
        console.log(uniqueid);



      User.push({
        id:uniqueid,
        username:username,
        DoB:DoB,
        Email:Email,
        salary:salary,
        Gender:gender
      })
      history('/')
     }
     return (
      <>
      <h1 className='text-primary text-center m-4'>Add User Details</h1>
      

      <Row>
        <Col md={5}>
          <img  src="https://www.insperity.com/wp-content/uploads/Employee-Related_To-Dos1200x600.png" alt=""width="100%" height="auto" />
          <br>
          </br>
          <img  src="https://b2821498.smushcdn.com/2821498/wp-content/uploads/2019/01/Top-60-Employee-Engagement-image33.png?lossy=0&strip=1&webp=1" alt=""width="100%" height="auto" />

        </Col>

        <Col md={5}>
        <Form className='border border-3 p-5'>
        <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter your ID"
        onChange={(e)=>setId(e.target.value)}
        required
        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name"
        onChange={(e)=>setusername(e.target.value)}
        required
        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>DoB</Form.Label>
        <Form.Control type="text" placeholder="Enter your Date of Birth"
        onChange={(e)=>setDoB(e.target.value)}
        required

        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email id"
        onChange={(e)=>setEmail(e.target.value)}
        required


        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary "
        onChange={(e)=>setSalary(e.target.value)}
        required


        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Enter your Gender"
        onChange={(e)=>setGender(e.target.value)}
        required


        />
        </Form.Group>
        
              
<Button variant="success" type="submit" onClick={(e)=>handleAdd(e)}>
        Add
      </Button>
    </Form>
        </Col>
      </Row>

    </>
     )
   }
   
   export default Add

