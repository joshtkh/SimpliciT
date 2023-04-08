import React, { useState } from 'react';
import axios from 'axios'; // Import axios library
import './login.css';
import { BiUser } from 'react-icons/bi';
import { BsFillLockFill } from 'react-icons/bs';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const isManager = username.startsWith('9');
    const employeeId = parseInt(username);
    console.log(employeeId);
    try {
      const response = await axios.post(`/api/login`, {
        username,
        password,
        isManager,
      });
      if (response.status === 200) {
        const { token } = response.data;
        console.log("Success!");
        localStorage.setItem('token', token);
      }
    } catch (error) {
        console.log("this");
      console.log(error);
    }
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
                value={username}
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
                value={password}
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
