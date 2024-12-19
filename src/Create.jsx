import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
const Create = () => {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
  const handelSubmit=(e)=>{
    e.preventDefault();
    //API call to save the data
    axios.post('http://localhost:3000/people',values)
    .then(res => {
      alert('successfully added person') 
      Navigate('/')     
    })
    .catch(err => console.error(err))
    //clear the form
    

  }
   
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handelSubmit}>
          <div className='mb-2'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' id='name' placeholder='Enter Name' 
            onChange={e => setValues({...values,name:e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' className='form-control' placeholder='Enter Email' 
            onChange={e => setValues({...values,email:e.target.value})}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label'>Phone</label>
            <input type='text' className='form-control' placeholder='Enter Phone'
            onChange={e => setValues({...values,phone:e.target.value})} />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create