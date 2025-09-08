// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Marzouqoh",
  lastName: "Musa",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Mukhlisoh",
  lastName: "Nusa",
  age: 20,
  location: "Abuja",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render table in the DOM
const table: HTMLTableElement = document.createElement("table");
table.border = "1";

// Add table header
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.textContent = "First Name";
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = "Location";

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

// Append table to the document body
document.body.appendChild(table);
