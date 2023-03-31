import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="login_form_component">
                <h1>SIMPLICIT</h1>
                <form action="">
                    <div className="input">
                        <label htmlFor=""></label>
                        <input 
                        type="text" 
                        placeholder='USERNAME'
                        name='username'
                        required
                        />
                    </div>
    
                    <div className="input">
                        
                        <input 
                        type="password" 
                        placeholder='PASSWORD'
                        name='password'
                        required
                        />
                    </div>

                    <button type="submit"></button>
                    <a href="/">Forgot Password?</a>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login