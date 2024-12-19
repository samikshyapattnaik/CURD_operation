import React ,{useEffect,useState}from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
// const [data,setData] = useState([])
const {id} = useParams()
const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
    useEffect(()=>{
          axios.get('http://localhost:3000/people/' + id )
          .then(res => {
            setValues(res.data)
          })
          .catch(err => console.error(err))
    },[])
    const handelUpdate=(e)=>{
      e.preventDefault();
      axios.put('http://localhost:3000/people/' + id, values)
      .then(res => {
        alert('sucessful update')
        Navigate('/')

      })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Add a User</h1>
      <form onSubmit={handelUpdate}>
        <div className='mb-2'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' className='form-control' id='name' placeholder='Enter Name' 
          value={values.name} onChange={e =>setValues({...values,name:e.target.value})}></input>     
             </div>
        <div className='mb-2'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='text' className='form-control' placeholder='Enter Email' 
         value={values.email} onChange={e =>setValues({...values,email:e.target.value})}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label'>Phone</label>
          <input type='text' className='form-control' placeholder='Enter Phone'
         value={values.phone} onChange={e =>setValues({...values,phone:e.target.value})}/>
        </div>
        <button className='btn btn-success'>Update</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
    </div>
  </div>
  )
}

export default Update