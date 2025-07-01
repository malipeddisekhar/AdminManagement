import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Css/AdminDashboard.css"; // 👈 Make sure this file is created in the same folder

function AdminDashboard() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:1234/api/students/search?name=${name}`);
      setStudents(res.data.content || res.data); // handles both Page and List responses
    } catch (err) {
      console.error("Error fetching student data:", err);
      alert("No student found with that name.");
    }
  };

  return (
    <div className="admin-dashboard-container">
      <header>
        <h1>Hey Admin 👋</h1>
        <Link to="/av" className="view-link">📊 View All Students (Paginated)</Link>
      </header>

      <section className="search-section">
        <h2>🔍 Search Student By Name</h2>
        <div className="search-controls">
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </section>

      {students.length > 0 && (
        <section className="results-section">
          <h3>🎓 Search Results</h3>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Branch</th>
                <th>DOB</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.studentId}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.branch}</td>
                  <td>{s.dob}</td>
                  <td>{s.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default AdminDashboard;
