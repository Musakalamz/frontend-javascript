interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Marzouqoh",
  lastName: "Musa",
  age: 25,
  location: "Lagos, Nigeria",
};

const studentB: Student = {
  firstName: "Mukhlisoh",
  lastName: "Musa",
  age: 20,
  location: "Abeokuta, Nigeria",
};

const studentsList: Array<Student> = [studentA, studentB];

const table = document.createElement("table");
table.border = "1";

const headerRow = table.insertRow();

const headerCell1 = headerRow.insertCell();
headerCell1.textContent = "First Name";

const headerCell2 = headerRow.insertCell();
headerCell2.textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
