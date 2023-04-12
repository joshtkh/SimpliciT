import React from 'react'
import './dashboard.css'
import Hours from '../components/Hours'
import Staff from '../components/Staff'
import Settings from '../components/Settings'
import { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('')

  return (
      <div className="dash_main">
        <div className="nav">
          <div className="title">
            <h1>Simplicit</h1>
          </div>
          <div className="tab_links">
            <a href="#" onClick={() => {setActiveTab('hours')}}>HOURS MANAGEMENT</a>
            <a href="#" onClick={() => {setActiveTab('staff')}}>STAFF MANAGEMENT</a>
            <a href="#"onClick={() => {setActiveTab('settings')}}>ACCOUNT SETTINGS</a>
          </div>
          <div className="sign_out">
            <button>SIGN OUT</button>
          </div>
        </div>
        <div className="content">
        {activeTab === 'hours' ? <Hours /> 
        : activeTab === 'staff' ? <Staff /> 
        : activeTab === 'settings' ? <Settings />
        : "Nothing Selected"}
        </div>
      </div>
  )
}

export default Dashboard