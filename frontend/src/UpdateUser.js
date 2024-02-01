import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const {id} = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get(`http://localhost:5000/getUser/${id}`)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
    })
    .catch(err => console.log(err))
  },[id]);

  const Update = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/updateUser/${id}`, {name,email})
    .then(result => {
      console.log(result)
      navigate("/")
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
          <h2 className='d-flex justify-content-center align-items-center'>Update User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control'
            value={name} onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control'
            value={email} onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className='d-grid gap-2 col-6 mx-auto'>
          <button type='submit' className='btn btn-info'>Submit</button>
          </div>
        </form>
      </div>      
    </div>
  )
}

export default UpdateUser
