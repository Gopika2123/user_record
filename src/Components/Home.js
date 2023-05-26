import React from 'react'
import User from './User'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

function Home() {
    const history=useNavigate()
    const handleDelete=(id)=>{
    var index=User.map(item=>item.id).indexOf(id);//index
    User.splice(index,1)//item remove
    console.log(User);//array position with remainig item
    history('/')//refresh
    }

    const handleEdit=(id,username,DoB,email,salary,gender)=>{
        localStorage.setItem("Id",id)
        localStorage.setItem("username",username)
        localStorage.setItem("DoB",DoB)
        localStorage.setItem("email",email)
        localStorage.setItem("Salary",salary)
        localStorage.setItem("Gender",gender)
    }
    return (
        <>
            <h1 className='text-primary text-center m-4' id='home'>User Record</h1>
           

            <Link to={'./add'}><Button variant="success">Add User Details <FaUserPlus /></Button></Link>


            <h3 className='my-5'>List of User</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Date of Birth</th>
                        <th>Email id</th>
                        <th>Salary</th>
                        <th>Gender</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        User && User.length > 0 ?
                            User.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.DoB}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.Gender}</td>

                                    <td><Link to={'./edit'}><Button onClick={()=>handleEdit(item.id,item.username,item.DoB,item.Email,item.salary,item.Gender)} variant="outline-primary"><FaUserEdit /></Button>{' '} </Link>
                                    <Button  onClick={()=>handleDelete(item.id)} variant="outline-danger"><FaTrashAlt /></Button>{' '}</td>
                                </tr>
                            )) : "no data available"

                    }
                </tbody>
            </Table>
        </>
    )

}

export default Home