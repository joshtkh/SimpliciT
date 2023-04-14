import React, { useState } from 'react';
import axios from 'axios'; // Import axios library
import './login.css';
import { BiUser } from 'react-icons/bi';
import { BsFillLockFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const isManager = username.startsWith('9');
    const employeeId = parseInt(username);
    // console.log(employeeId);
    const data = {
      employeeId: employeeId,
      password: password,
      isManager: isManager
    }
    console.log("DATA TO SEND:", data);
    const loginURL = "http://localhost:3000/api/login";

    axios.post(loginURL, data)
    .then(result => {
        const { token } = result.data;
        console.log("Success!");
        localStorage.setItem('token', token);
        props.setIsAuthenticated(true);
        navigate('/dashboard');
    })
    .catch(error => {
      console.log("Axios POST Error: Login Error.", error);
    })
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="login">
        <div className="login_form_component">
          <h1>SIMPLICIT</h1>
          <form onSubmit={handleLogin}>
            <div className="input">
              <BiUser id="icon" />
              <input
                type="text"
                placeholder="USERNAME"
                name="username"
                id="username"
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="input">
              <BsFillLockFill id="icon" />
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                id="password"
                onChange={handlePasswordChange}
                required
              />
            </div>

            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
