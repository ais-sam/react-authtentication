
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import useAuth from '../context/authContext'
import axios from '../api/axios'


const Admin = () => {
  const {token} = useAuth()

  const [list, setList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(()=>{
    const getList = async()=>{
      try {
        const response = await axios.get('',{ headers: {"Authorization" : `Bearer ${token}`}})
        console.log("CLIENT LIST ", response)
        setList(response.data)
        
      } catch (error) {
        console.log(error)
        if (!error?.response) {
          setMessage("No response from the server");
        } else if (error.response.status === 401) {
          setMessage("You are not authorized");
        } else if (error.response.status === 500) {
          setMessage("internal server error");
        } else {
          setMessage("an error occurred");
        }
      }
    }
    getList()
  },[])
  return (
    <>
      <Header/>
      {message? <h4 className='mt-4 text-danger'>{message}</h4>
      :
      <div className='container'>
        <h2 className='text-start mt-5'>Clients</h2>
        <Table list ={list}/>
      </div>
      
      }
    </>
  )
}

export default Admin