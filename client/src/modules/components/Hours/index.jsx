import React, { useRef, useState } from 'react'
import './hours.css'

const Hours = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

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
        <button>Upload</button>
      </div>
    </div>
  )
}

export default Hours