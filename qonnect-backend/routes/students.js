const express = require('express');
const router = express.Router();

// Mock students database
let students = [
  {
    id: '1',
    name: 'Alex Thompson',
    email: 'alex.thompson@student.edu',
    studentId: 'STU001',
    major: 'Computer Science',
    year: 'Junior',
    gpa: 3.8,
    advisor: 'Dr. Sarah Johnson',
    courses: ['CS101', 'MATH201', 'ENG101'],
    phone: '+1-555-0125',
    address: '123 Student Ave, University City',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@student.edu',
    studentId: 'STU002',
    major: 'Mathematics',
    year: 'Senior',
    gpa: 3.9,
    advisor: 'Prof. Michael Chen',
    courses: ['MATH201', 'STAT401', 'CS101'],
    phone: '+1-555-0126',
    address: '456 College Blvd, University City',
    createdAt: '2024-01-16T10:00:00Z'
  }
];

// Get all students
router.get('/', (req, res) => {
  try {
    res.json({ students });
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ error: 'Failed to get students' });
  }
});

// Get student by ID
router.get('/:id', (req, res) => {
  try {
    const student = students.find(s => s.id === req.params.id);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json({ student });
  } catch (error) {
    console.error('Get student error:', error);
    res.status(500).json({ error: 'Failed to get student' });
  }
});

// Add new student
router.post('/', (req, res) => {
  try {
    const { 
      name, 
      email, 
      studentId, 
      major, 
      year, 
      gpa, 
      advisor, 
      courses, 
      phone, 
      address 
    } = req.body;
    
    const newStudent = {
      id: Date.now().toString(),
      name,
      email,
      studentId,
      major,
      year,
      gpa: gpa || 0.0,
      advisor,
      courses: courses || [],
      phone,
      address,
      createdAt: new Date().toISOString()
    };

    students.push(newStudent);
    
    res.status(201).json({
      message: 'Student added successfully',
      student: newStudent
    });
  } catch (error) {
    console.error('Add student error:', error);
    res.status(500).json({ error: 'Failed to add student' });
  }
});

// Update student
router.put('/:id', (req, res) => {
  try {
    const studentIndex = students.findIndex(s => s.id === req.params.id);
    
    if (studentIndex === -1) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const { 
      name, 
      email, 
      studentId, 
      major, 
      year, 
      gpa, 
      advisor, 
      courses, 
      phone, 
      address 
    } = req.body;
    
    // Update student fields
    if (name) students[studentIndex].name = name;
    if (email) students[studentIndex].email = email;
    if (studentId) students[studentIndex].studentId = studentId;
    if (major) students[studentIndex].major = major;
    if (year) students[studentIndex].year = year;
    if (gpa !== undefined) students[studentIndex].gpa = gpa;
    if (advisor) students[studentIndex].advisor = advisor;
    if (courses) students[studentIndex].courses = courses;
    if (phone) students[studentIndex].phone = phone;
    if (address) students[studentIndex].address = address;
    
    students[studentIndex].updatedAt = new Date().toISOString();

    res.json({
      message: 'Student updated successfully',
      student: students[studentIndex]
    });
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ error: 'Failed to update student' });
  }
});

// Delete student
router.delete('/:id', (req, res) => {
  try {
    const studentIndex = students.findIndex(s => s.id === req.params.id);
    
    if (studentIndex === -1) {
      return res.status(404).json({ error: 'Student not found' });
    }

    students.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

// Get students by major
router.get('/major/:major', (req, res) => {
  try {
    const majorStudents = students.filter(s => 
      s.major.toLowerCase() === req.params.major.toLowerCase()
    );
    
    res.json({ students: majorStudents });
  } catch (error) {
    console.error('Get students by major error:', error);
    res.status(500).json({ error: 'Failed to get students by major' });
  }
});

// Get students by year
router.get('/year/:year', (req, res) => {
  try {
    const yearStudents = students.filter(s => 
      s.year.toLowerCase() === req.params.year.toLowerCase()
    );
    
    res.json({ students: yearStudents });
  } catch (error) {
    console.error('Get students by year error:', error);
    res.status(500).json({ error: 'Failed to get students by year' });
  }
});

module.exports = router; 