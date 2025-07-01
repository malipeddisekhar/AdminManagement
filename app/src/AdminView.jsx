import { useEffect, useState } from "react";
import axios from "axios";
import "./Css/AdminView.css";

function AdminView() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`http://localhost:1234/api/students?page=${page}&size=5`);
      setStudents(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Failed to fetch students", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [page]);

  return (
    <div className="admin-view-container">
      <h2 className="admin-heading">📊 Admin - Student List</h2>
      
      <table className="student-table">
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

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>
          ◀ Prev
        </button>
        <span>Page: {page + 1}</span>
        <button onClick={() => setPage((p) => p + 1)} disabled={page === totalpages - 1}>
          Next ▶
        </button>
      </div>
    </div>
  );
}

export default AdminView;
