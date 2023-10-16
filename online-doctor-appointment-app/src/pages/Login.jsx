import React from 'react'
import { Form, Input,message } from 'antd'
import "../styles/RegisterStyle.css"
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/alertSlice';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onfinishHandler = async (values)=>{
    console.log(values);
    
    const instance = axios.create({
      baseURL:"http://localhost:8080"
    })
    try {
      dispatch(showLoading())
      const res = await instance.post('/api/v1/user/login',values)
      dispatch(hideLoading())
      console.log(res);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully !");
        navigate('/')
      } else {
        message.error(res.data.message);
      }
      
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("something went wrong");
      
      
    }
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