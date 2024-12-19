import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{ Link, useNavigate} from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([])
    useEffect(()=>{
          axios.get('http://localhost:3000/people')
          .then(res => setData(res.data))
          .catch(err => console.error(err))
    },[])
    //delete data
    const handelDelete = (id) => {
      const confirm = window.confirm('Are you sure you want to delete')
      if(confirm){
        axios.delete('http://localhost:3000/people/' + id )
       .then(res => {
          location.reload() //after clicking delete button will reload
       })
       .catch(err => console.log(err))
      }
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
       <h1>List of Users</h1>
       <div className='w-75 rounded bg white border shadow p-4'>
       <div className='d-flex justify-content-end'>
        <Link to="/create" className='btn btn-success'>Add</Link>
        </div>
       <table className='table table-stipend'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((element,i)=>(
              <tr key={i}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
              <td>
                <Link to={`/read/${element.id}`} className='btn btn-sm btn-info me-2'>Read</Link> 
                <Link to={`/update/${element.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link> 
                <button onClick={ e =>handelDelete(element.id)}className='btn btn-sm btn-danger'>Delete</button>
                </td>
             </tr>
            ))
          }
        </tbody>
       </table>
    </div>
    </div>
  )
}

export default Home