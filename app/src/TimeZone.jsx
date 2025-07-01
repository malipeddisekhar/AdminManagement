import React, { useState } from 'react';
import axios from 'axios';
import "./Css/TimeZone.css"; // ✅ You said CSS files are inside "Css" folder

export default function TimeZone() {
  const [region, setRegion] = useState('Asia/Kolkata');
  const [timeResult, setTimeResult] = useState('');

  const handleGetTime = async () => {
    try {
      const res = await axios.get(`http://localhost:1234/api/students/time?region=${region}`);
      console.log(res);
      setTimeResult(res.data);
    } catch (err) {
      setTimeResult('Error fetching time');
      console.log(err);
    }
  };

  return (
    <div className="timezone-container">
      <h1 className="heading">🌍 Time API Client</h1>

      <div className="card">
        <h2 className="subheading">Get Time by Region</h2>
        <input
          className="input"
          placeholder="e.g., Asia/Kolkata"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <button className="btn" onClick={handleGetTime}>
          Fetch Time
        </button>
        <p className="result">🕒 Time: {timeResult}</p>
      </div>
    </div>
  );
} 
