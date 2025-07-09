// Simple authentication utilities for localStorage-based auth

export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user).isLoggedIn : false;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const login = (userData) => {
  const user = {
    ...userData,
    isLoggedIn: true,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const register = (userData) => {
  const user = {
    ...userData,
    isLoggedIn: true,
    registrationTime: new Date().toISOString()
  };
  localStorage.setItem('user', JSON.stringify(user));
  return user;
}; 