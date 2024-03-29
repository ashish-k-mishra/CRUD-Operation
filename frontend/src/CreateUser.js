import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/createUser/", {name, email})
    .then((result)=> console.log(result))
    .catch(err => console.log(err));
    navigate("/")
  }

  return (
    <>
      <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2 className='d-flex justify-content-center align-items-center'>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control'
            onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control'
            onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className='d-grid gap-2 col-6 mx-auto'>
          <button className='btn btn-info'>Submit</button>
          </div>
        </form>
      </div>      
    </div>
    </>
  )
}

export default CreateUser
