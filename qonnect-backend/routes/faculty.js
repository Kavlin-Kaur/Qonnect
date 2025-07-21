const express = require('express');
const router = express.Router();

// Mock faculty database
let faculty = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    department: 'Computer Science',
    specialization: 'Artificial Intelligence',
    office: 'Room 301, Building A',
    phone: '+1-555-0123',
    bio: 'Dr. Johnson specializes in machine learning and AI applications.',
    courses: ['CS101', 'AI201', 'ML301'],
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@university.edu',
    department: 'Mathematics',
    specialization: 'Applied Mathematics',
    office: 'Room 205, Building B',
    phone: '+1-555-0124',
    bio: 'Professor Chen focuses on mathematical modeling and optimization.',
    courses: ['MATH201', 'CALC301', 'STAT401'],
    createdAt: '2024-01-16T10:00:00Z'
  }
];

// Get all faculty
router.get('/', (req, res) => {
  try {
    res.json({ faculty });
  } catch (error) {
    console.error('Get faculty error:', error);
    res.status(500).json({ error: 'Failed to get faculty' });
  }
});

// Get faculty by ID
router.get('/:id', (req, res) => {
  try {
    const facultyMember = faculty.find(f => f.id === req.params.id);
    
    if (!facultyMember) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }

    res.json({ faculty: facultyMember });
  } catch (error) {
    console.error('Get faculty member error:', error);
    res.status(500).json({ error: 'Failed to get faculty member' });
  }
});

// Add new faculty member
router.post('/', (req, res) => {
  try {
    const { name, email, department, specialization, office, phone, bio, courses } = req.body;
    
    const newFaculty = {
      id: Date.now().toString(),
      name,
      email,
      department,
      specialization,
      office,
      phone,
      bio,
      courses: courses || [],
      createdAt: new Date().toISOString()
    };

    faculty.push(newFaculty);
    
    res.status(201).json({
      message: 'Faculty member added successfully',
      faculty: newFaculty
    });
  } catch (error) {
    console.error('Add faculty error:', error);
    res.status(500).json({ error: 'Failed to add faculty member' });
  }
});

// Update faculty member
router.put('/:id', (req, res) => {
  try {
    const facultyIndex = faculty.findIndex(f => f.id === req.params.id);
    
    if (facultyIndex === -1) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }

    const { name, email, department, specialization, office, phone, bio, courses } = req.body;
    
    // Update faculty fields
    if (name) faculty[facultyIndex].name = name;
    if (email) faculty[facultyIndex].email = email;
    if (department) faculty[facultyIndex].department = department;
    if (specialization) faculty[facultyIndex].specialization = specialization;
    if (office) faculty[facultyIndex].office = office;
    if (phone) faculty[facultyIndex].phone = phone;
    if (bio) faculty[facultyIndex].bio = bio;
    if (courses) faculty[facultyIndex].courses = courses;
    
    faculty[facultyIndex].updatedAt = new Date().toISOString();

    res.json({
      message: 'Faculty member updated successfully',
      faculty: faculty[facultyIndex]
    });
  } catch (error) {
    console.error('Update faculty error:', error);
    res.status(500).json({ error: 'Failed to update faculty member' });
  }
});

// Delete faculty member
router.delete('/:id', (req, res) => {
  try {
    const facultyIndex = faculty.findIndex(f => f.id === req.params.id);
    
    if (facultyIndex === -1) {
      return res.status(404).json({ error: 'Faculty member not found' });
    }

    faculty.splice(facultyIndex, 1);
    res.json({ message: 'Faculty member deleted successfully' });
  } catch (error) {
    console.error('Delete faculty error:', error);
    res.status(500).json({ error: 'Failed to delete faculty member' });
  }
});

module.exports = router; 