import React, { useState, useEffect } from "react";

const StudentForm = ({ addStudent, editStudent, updateStudent, cancelEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setEmail(editStudent.email);
      setAge(editStudent.age);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("Please enter all fields");
      return;
    }

    const studentData = { name, email, age };

    if (editStudent) {
      updateStudent(editStudent.id, studentData);
    } else {
      addStudent(studentData);
    }

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Student Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">{editStudent ? "Update Student" : "Add Student"}</button>
      {editStudent && <button type="button" onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default StudentForm;