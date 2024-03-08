import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center ch-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Sign In</h3>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder='Enter Email' className='form-control' id='email' required/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password </label>
                <input type="password" placeholder='Enter Password' className='form-control' id='password'/>
            </div>
            <div className='mb-2'>
            <input type='checkbox' className='custom-control custom checkbox' id='check'/>
            <label htmlFor="check" className='custom-input-label'>Remember Me</label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>Sign in</button>
            </div>
            <p className='text-end mt-2'>
                Forgot <a href='' className='ms-2'>Password ?</a><Link to="/signup" className='ms-2'>Sign up</Link>
            </p>
            

        </form>
        </div>
    </div>

  )
}

export default Login
