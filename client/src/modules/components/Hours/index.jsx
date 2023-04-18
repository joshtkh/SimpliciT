import React, { useRef, useState } from 'react'
import axios from 'axios'
import './hours.css'

const Hours = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  const token = localStorage.getItem('token');
  const [header64, payload64, signature] = token.split('.');
  const payload = JSON.parse(atob(payload64));
  const employeeId = payload.id;

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();

    

    const data = {
      employeeId,
      date,
      shiftStartTime: document.getElementById("shift_start").value,
      shiftEndTime: document.getElementById("shift_end").value,
    }
    console.log(data);
    try {
      const response = await axios.post('/api/shift/create', {
        employeeId,
        date,
        shiftStartTime: document.getElementById("shift_start").value,
        shiftEndTime: document.getElementById("shift_end").value
      });
      
      if (response.status === 200) {
        // Request was successful
        setDate('');
        document.getElementById("shift_start").value = '';
        document.getElementById("shift_end").value = '';
      } else {
        // Request failed
        throw new Error('Failed to submit hours');
      }
      
  
      // Reset form after successful submission
      setDate('');
      document.getElementById("shift_start").value = '';
      document.getElementById("shift_end").value = '';
  
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  }

  return (
    <div className='hours_main'>
      <div className="hours_title">
        <h1>WORKING HOURS</h1>
      </div>
      <div className="hours_content">
        <div className="date_picker">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            onChange={handleChange}
            ref={dateInputRef}
          />
          {date !== '' ? date : ''}
        </div>
        <div className="time_picker">
          <label htmlFor="shift-start">Shift Start</label>
          <input type="time" name="shift-start" id="shift_start" />
          <label htmlFor="shift-end">Shift End</label>
          <input type="time" name="shift-end" id="shift_end" />
        </div>
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  )
}

export default Hours