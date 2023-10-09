import React from 'react'
import { Form, Input } from 'antd'
import "../styles/RegisterStyle.css"
import {Link} from 'react-router-dom'


const Login = () => {
  const onfinishHandler = (values)=>{
    console.log(values);
  }
  return (
    <>
    <div className='form-container' >

    
    <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
      <h1 className='text-center'>Login Form</h1>
      <Form.Item label="Eame" name="email">
        <Input type='email' required/>
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type='password' required/>
      </Form.Item>
      <Link to="/register" className='m-2'>Don't have an account? Create Account</Link>
      <button type='submit' className='btn btn-primary'>
          Login
         </button>


    </Form>
    </div>
    
    </>
  )
}

export default Login