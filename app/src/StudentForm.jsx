import { useState } from "react";
import axios from "axios";
import "./Css/StudentForm.css";

function StudentForm() {
  const [student, setStudent] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
    dob: "",
    section: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1234/api/students", student);
      alert("Student Registered Successfully");
      setStudent({
        studentId: "",
        name: "",
        email: "",
        phone: "",
        branch: "",
        dob: "",
        section: ""
      });
      
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="student-form-container">
      <div className="form-card">
        <h2>📋 Student Registration</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <input name="studentId" value={student.studentId} onChange={handleChange} placeholder="Student ID" required />
          <input name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
          <input name="email" value={student.email} onChange={handleChange} placeholder="Email" type="email" required />
          <input name="phone" value={student.phone} onChange={handleChange} placeholder="Phone" required />
          <input name="branch" value={student.branch} onChange={handleChange} placeholder="Branch" required />
          <input name="dob" value={student.dob} onChange={handleChange} type="date" required />
          <input name="section" value={student.section} onChange={handleChange} placeholder="Section" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
