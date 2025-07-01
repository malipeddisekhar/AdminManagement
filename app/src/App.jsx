import React from "react";
import StudentForm from "./StudentForm";
import AdminView from "./AdminView";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminDashboard from "./AdminDashboard";
import TimeZone from "./TimeZone";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/reg" element={<StudentForm/>}/>
              <Route path="/av" element={<AdminView/>}/>
              <Route path="/ad" element={<AdminDashboard/>}/>
              <Route path="/time" element={<TimeZone/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
