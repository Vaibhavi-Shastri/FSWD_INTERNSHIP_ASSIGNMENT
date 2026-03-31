console.log("Student Manager");
let students = [
  {
    name: "Amit",
    marks: [86, 58, 95],
  },
  {
    name: "Suman",
    marks: [86, 58, 99],
  },
  {
    name: "Rohit",
    marks: [54, 75, 65],
  },
  {
    name: "Siya",
    marks: [65, 75, 74],
  },
];
function calculateAvgMarks(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let avg = sum / marks.length;
  return avg;
}

students.forEach(function (student) {
  console.log("Name: ", student.name);
  console.log("Marks: ", student.marks);
  let avgMarks = calculateAvgMarks(student.marks);
  console.log("Average Marks: ", avgMarks);
  console.log("-------------------------------");
});
