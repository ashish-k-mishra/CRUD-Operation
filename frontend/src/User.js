import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/") 
        .then((result)=> setUsers(result.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete = (id)=>{
      axios.delete(`http://localhost:5000/deleteUser/${id}`)
      .then(result => {console.log(result)
      window.location.reload()})
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2 className='d-flex justify-content-center align-items-center'>CRUD Operation</h2>
        <hr />
      <table className='table table-hover'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" 
                            onClick={(e)=> handleDelete(user._id)}>Delete</button>
                            </td>
                    </tr>
                })}
            </tbody>
        </table>
        <div className='d-grid gap-2 col-6 mx-auto'>
        <Link to="/create" className="btn btn-info mb-1 ">Add+</Link>
        </div>
      </div>
    </div>
  )
}

export default User
