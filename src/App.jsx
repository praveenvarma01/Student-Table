import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { exportToExcel } from "./utils/exportExcel";
import "./style.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const updateStudent = (id, updatedData) => {
    setStudents(students.map((s) => (s.id === id ? { ...s, ...updatedData } : s)));
    setEditStudent(null);
  };

  const cancelEdit = () => setEditStudent(null);

  return (
    <div className="container">
      <h1 className="title">Student Management System</h1>
      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
        cancelEdit={cancelEdit}
      />
      <button className="export-btn" onClick={() => exportToExcel(students)}>Download Excel</button>
      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        setEditStudent={setEditStudent}
      />
    </div>
  );
};

export default App;