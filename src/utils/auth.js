// Authentication utilities for backend API integration

const API_BASE_URL = 'http://localhost:3000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    console.log('Making API call to:', `${API_BASE_URL}${endpoint}`);
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    console.log('Response status:', response.status);
    
    const data = await response.json();
    console.log('Response data:', data);
    
    if (!response.ok) {
      throw new Error(data.error || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API call error:', error);
    console.error('Full error details:', {
      message: error.message,
      stack: error.stack,
      endpoint: `${API_BASE_URL}${endpoint}`,
      config: config
    });
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  return !!(token && user);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const login = async (email, password) => {
  try {
    const response = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const { user, token } = response;
    
    // Store user and token
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    
    return { user, token };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    const { user, token } = response;
    
    // Store user and token
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    
    return { user, token };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    // Call logout endpoint
    await apiCall('/auth/logout', {
      method: 'POST',
    });
  } catch (error) {
    console.error('Logout API error:', error);
  } finally {
    // Clear local storage regardless of API call success
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
};

export const getCurrentUserProfile = async () => {
  try {
    const response = await apiCall('/auth/me');
    return response.user;
  } catch (error) {
    console.error('Get current user error:', error);
    throw error;
  }
};

// Test function to check backend connection
export const testBackendConnection = async () => {
  try {
    console.log('Testing backend connection...');
    const response = await fetch('http://localhost:3000/api/health');
    const data = await response.json();
    console.log('Backend health check response:', data);
    return data;
  } catch (error) {
    console.error('Backend connection test failed:', error);
    throw error;
  }
};

// API functions for other features
export const api = {
  // Faculty
  getFaculty: () => apiCall('/faculty'),
  getFacultyById: (id) => apiCall(`/faculty/${id}`),
  createFaculty: (data) => apiCall('/faculty', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateFaculty: (id, data) => apiCall(`/faculty/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteFaculty: (id) => apiCall(`/faculty/${id}`, {
    method: 'DELETE',
  }),

  // Students
  getStudents: () => apiCall('/students'),
  getStudentById: (id) => apiCall(`/students/${id}`),
  createStudent: (data) => apiCall('/students', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateStudent: (id, data) => apiCall(`/students/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteStudent: (id) => apiCall(`/students/${id}`, {
    method: 'DELETE',
  }),
  getStudentsByMajor: (major) => apiCall(`/students/major/${major}`),
  getStudentsByYear: (year) => apiCall(`/students/year/${year}`),

  // Inquiries
  getInquiries: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return apiCall(`/inquiry?${params}`);
  },
  getInquiryById: (id) => apiCall(`/inquiry/${id}`),
  createInquiry: (data) => apiCall('/inquiry', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateInquiry: (id, data) => apiCall(`/inquiry/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteInquiry: (id) => apiCall(`/inquiry/${id}`, {
    method: 'DELETE',
  }),
  getInquiriesByStudent: (studentId) => apiCall(`/inquiry/student/${studentId}`),
  getInquiriesByStatus: (status) => apiCall(`/inquiry/status/${status}`),

  // Users
  getUsers: () => apiCall('/users'),
  getUserById: (id) => apiCall(`/users/${id}`),
  updateUser: (id, data) => apiCall(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteUser: (id) => apiCall(`/users/${id}`, {
    method: 'DELETE',
  }),
}; 