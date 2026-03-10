import * as XLSX from "xlsx";

export const exportToExcel = (students) => {
  if (students.length === 0) {
    alert("No students to export!");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(students);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
  XLSX.writeFile(workbook, "students.xlsx");
};