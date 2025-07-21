const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock inquiries database
let inquiries = [
  {
    id: '1',
    studentId: 'STU001',
    studentName: 'Alex Thompson',
    email: 'alex.thompson@student.edu',
    subject: 'Course Registration Issue',
    message: 'I am unable to register for CS201 course. Getting an error message.',
    category: 'academic',
    status: 'open',
    priority: 'medium',
    assignedTo: null,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    studentId: 'STU002',
    studentName: 'Maria Garcia',
    email: 'maria.garcia@student.edu',
    subject: 'Financial Aid Question',
    message: 'I need information about applying for financial aid for next semester.',
    category: 'financial',
    status: 'in_progress',
    priority: 'high',
    assignedTo: 'Dr. Sarah Johnson',
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T14:30:00Z'
  }
];

// Get all inquiries
router.get('/', (req, res) => {
  try {
    const { status, category, priority } = req.query;
    let filteredInquiries = [...inquiries];

    // Filter by status
    if (status) {
      filteredInquiries = filteredInquiries.filter(i => i.status === status);
    }

    // Filter by category
    if (category) {
      filteredInquiries = filteredInquiries.filter(i => i.category === category);
    }

    // Filter by priority
    if (priority) {
      filteredInquiries = filteredInquiries.filter(i => i.priority === priority);
    }

    res.json({ inquiries: filteredInquiries });
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({ error: 'Failed to get inquiries' });
  }
});

// Get inquiry by ID
router.get('/:id', (req, res) => {
  try {
    const inquiry = inquiries.find(i => i.id === req.params.id);
    
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    res.json({ inquiry });
  } catch (error) {
    console.error('Get inquiry error:', error);
    res.status(500).json({ error: 'Failed to get inquiry' });
  }
});

// Create new inquiry
router.post('/', [
  body('studentId').notEmpty(),
  body('studentName').notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty().trim(),
  body('message').notEmpty().trim(),
  body('category').isIn(['academic', 'financial', 'technical', 'other']),
  body('priority').isIn(['low', 'medium', 'high']).optional()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      studentId, 
      studentName, 
      email, 
      subject, 
      message, 
      category, 
      priority = 'medium' 
    } = req.body;
    
    const newInquiry = {
      id: Date.now().toString(),
      studentId,
      studentName,
      email,
      subject,
      message,
      category,
      status: 'open',
      priority,
      assignedTo: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    inquiries.push(newInquiry);
    
    res.status(201).json({
      message: 'Inquiry created successfully',
      inquiry: newInquiry
    });
  } catch (error) {
    console.error('Create inquiry error:', error);
    res.status(500).json({ error: 'Failed to create inquiry' });
  }
});

// Update inquiry
router.put('/:id', (req, res) => {
  try {
    const inquiryIndex = inquiries.findIndex(i => i.id === req.params.id);
    
    if (inquiryIndex === -1) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    const { 
      subject, 
      message, 
      category, 
      status, 
      priority, 
      assignedTo 
    } = req.body;
    
    // Update inquiry fields
    if (subject) inquiries[inquiryIndex].subject = subject;
    if (message) inquiries[inquiryIndex].message = message;
    if (category) inquiries[inquiryIndex].category = category;
    if (status) inquiries[inquiryIndex].status = status;
    if (priority) inquiries[inquiryIndex].priority = priority;
    if (assignedTo !== undefined) inquiries[inquiryIndex].assignedTo = assignedTo;
    
    inquiries[inquiryIndex].updatedAt = new Date().toISOString();

    res.json({
      message: 'Inquiry updated successfully',
      inquiry: inquiries[inquiryIndex]
    });
  } catch (error) {
    console.error('Update inquiry error:', error);
    res.status(500).json({ error: 'Failed to update inquiry' });
  }
});

// Delete inquiry
router.delete('/:id', (req, res) => {
  try {
    const inquiryIndex = inquiries.findIndex(i => i.id === req.params.id);
    
    if (inquiryIndex === -1) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    inquiries.splice(inquiryIndex, 1);
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Delete inquiry error:', error);
    res.status(500).json({ error: 'Failed to delete inquiry' });
  }
});

// Get inquiries by student
router.get('/student/:studentId', (req, res) => {
  try {
    const studentInquiries = inquiries.filter(i => i.studentId === req.params.studentId);
    res.json({ inquiries: studentInquiries });
  } catch (error) {
    console.error('Get student inquiries error:', error);
    res.status(500).json({ error: 'Failed to get student inquiries' });
  }
});

// Get inquiries by status
router.get('/status/:status', (req, res) => {
  try {
    const statusInquiries = inquiries.filter(i => i.status === req.params.status);
    res.json({ inquiries: statusInquiries });
  } catch (error) {
    console.error('Get inquiries by status error:', error);
    res.status(500).json({ error: 'Failed to get inquiries by status' });
  }
});

module.exports = router; 