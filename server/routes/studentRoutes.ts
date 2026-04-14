import express from "express";

const router = express.Router();

// temporary database
let students: any[] = [];

// GET all students
router.get("/", (req, res) => {
  res.json({
    count: students.length,
    data: students,
  });
});

// Post a new student
router.post("/add", (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const newStudent = {
    id: Date.now(),
    name,
    email,
    course,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student Added Successfully",
    data: newStudent,
  });
});



export default router;