import React from 'react'
import './dashboard.css'
import {Hours, Staff, Settings} from '../components'
import Search from '../components/Search/Search'
import { useState } from 'react'

const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState('');
  const token = localStorage.getItem('token');
  const [header64, payload64, signature] = token.split('.');
  const payload = JSON.parse(atob(payload64));

  const handleSignOut=()=>{
    localStorage.removeItem('token');
    props.setIsAuthenticated(false);
    console.log('Logged out!');
  }

  const employeeId = payload.id.toString();
  const isManager = employeeId.startsWith('9');
  return (
      <div className="dash_main">
        <div className="nav">
          <div className="title">
            <h1>Simplicit</h1>
          </div>
          <div className="tab_links">
            <a href="#" onClick={() => {setActiveTab('hours')}}>HOURS MANAGEMENT</a>
            <a href="#" onClick={() => {setActiveTab('staff')}}>STAFF MANAGEMENT</a>
            <a href="#" onClick={() => {setActiveTab('settings')}}>ACCOUNT SETTINGS</a>
          </div>
          <div className="sign_out">
            <button onClick={handleSignOut}>SIGN OUT</button>
          </div>
        </div>
        <div className="content">
        {isManager ?(<Search/>)
        :activeTab === 'hours' ? <Hours /> 
        : activeTab === 'staff' ? <Staff /> 
        : activeTab === 'settings' ? <Settings />
        : `Welcome, ${payload.name}!\n\nEmployee ID: ${payload.id}`}


        </div>
      </div>
  )
}

export default Dashboard;