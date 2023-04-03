import React from 'react'
import './login.css'
import { BiUser } from 'react-icons/bi'
import { BsFillLockFill } from 'react-icons/bs'

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="login_form_component">
                <h1>SIMPLICIT</h1>
                <form action="">
                    <div className="input">
                        <BiUser id='icon'/>
                        <input 
                        type="text" 
                        placeholder='USERNAME'
                        name='username'
                        required
                        />
                    </div>
    
                    <div className="input">
                        <BsFillLockFill id='icon'/>
                        <input 
                        type="password" 
                        placeholder='PASSWORD'
                        name='password'
                        required
                        />
                    </div>

                    <button type="submit">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login