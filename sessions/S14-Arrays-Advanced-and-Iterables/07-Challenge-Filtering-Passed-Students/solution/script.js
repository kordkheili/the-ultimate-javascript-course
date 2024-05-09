function filterPassedStudents(students, minPassingGrade) {
  /* START CODE HERE */
  return students.filter((student) => student.grade >= minPassingGrade);
  /* END CODE HERE */
}

const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 65 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 75 },
];

const passingGrade = 70;

// Test the function
console.log(filterPassedStudents(students, passingGrade));
