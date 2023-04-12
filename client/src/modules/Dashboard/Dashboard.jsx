import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
      <div className="dash_main">
        <div className="nav">
          <div className="title">
            <h1>Simplicit</h1>
          </div>
          <div className="tab_links">
            <a href="#">HOURS MANAGEMENT</a>
            <a href="#">STAFF MANAGEMENT</a>
            <a href="#">ACCOUNT SETTINGS</a>
          </div>
          <div className="sign_out">
            <button>SIGN OUT</button>
          </div>
        </div>
        <div className="content">

        </div>
      </div>
  )
}

export default Dashboard