const express = require('express');
const router = express.Router();

// Mock user database
let users = [];

// Register user
router.post('/register', (req, res) => {
  try {
    const { name, email, password, role = 'student' } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user (in production, hash the password)
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // In production, hash this
      name,
      role,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      message: 'User registered successfully',
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + Date.now() // In production, generate real JWT
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login user
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password (in production, use bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + Date.now() // In production, generate real JWT
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Get current user
router.get('/me', (req, res) => {
  try {
    // In production, verify JWT token
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // For now, just return a mock user
    const mockUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      role: 'student'
    };

    res.json({ user: mockUser });

  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

module.exports = router; 