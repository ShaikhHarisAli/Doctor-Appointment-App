import React from 'react'
import { Form,Input, message } from 'antd';
import "../styles/RegisterStyle.css"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Register =  () => {
  const navigate = useNavigate()
  // onFinishHandler
  const onfinishHandler = async (values)=>{
    console.log(values);
    
    const instance = axios.create({
      baseURL:"http://localhost:8080"
    })
    try {
      const res = await instance.post('/api/v1/user/register',values)
      console.log(res);
      
      if(res.data.success){
        message.success("Register Successfully !");
        navigate('/login')
      } 
      else{
        message.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error);
      message.error('Something went Wrong')      
    }
  }

  
  return (

    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
          <h1 className='text-center'>
            Register
          </h1>
          <Form.Item label="Name" name="name">
            <Input type='text' required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type='email' required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' required/>
          </Form.Item>
          <Link to="/login" className='m-2'>Already have an account?</Link>
         <button type='submit' className='btn btn-primary'>
          Register
         </button>


        </Form>
      </div>
    </>
  )
}

export default Register

// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://new-api-url.com' // Replace with your new base URL
// });

// export default instance;
