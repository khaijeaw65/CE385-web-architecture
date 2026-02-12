import express from "express";

const students = [
  { id: 1, name: "node", age: 18 },
  { id: 2, name: "express", age: 19 },
  { id: 3, name: "javascript", age: 20 },
];

const app = express();

app.use(express.json());

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const student = students.find((s) => s.id === studentId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

const validateStudent = (req, res, next) => {
  const { name, age } = req.body;

  if (!name || !age) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }

  next();
}

app.post("/students", validateStudent, (req, res) => {
  /**
   * @type {{id: number, name: string, age: number}}
   */
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  /**
   * @type {{name: string, age: number}}
   */
  const updatedData = req.body;
  const student = students.find((s) => s.id === studentId);
  if (student) {
    student.name = updatedData.name;
    student.age = updatedData.age;
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

app.delete("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const index = students.findIndex((s) => s.id === studentId);
  if (index === -1) {
    res.status(404).json({ message: "Student not found" });
  } else {
    const deletedStudent = students.splice(index, 1);
    res.json(deletedStudent[0]);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
