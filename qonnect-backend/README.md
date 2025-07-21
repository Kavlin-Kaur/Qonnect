# Qonnect Backend API

A Node.js/Express.js backend API for the Qonnect application, providing authentication, user management, faculty, student, and inquiry management.

## Features

- 🔐 **Authentication**: JWT-based authentication with bcrypt password hashing
- 👥 **User Management**: CRUD operations for users
- 🎓 **Faculty Management**: Manage faculty profiles and information
- 📚 **Student Management**: Handle student data and profiles
- ❓ **Inquiry System**: Student support and inquiry management
- 🛡️ **Security**: Helmet, CORS, input validation
- 📝 **Logging**: Morgan HTTP request logging

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the backend directory:
   ```bash
   cd qonnect-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   # Copy the example and modify as needed
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication (`/api/auth`)

- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /me` - Get current user profile
- `POST /logout` - Logout user

### Users (`/api/users`)

- `GET /` - Get all users
- `GET /:id` - Get user by ID
- `PUT /:id` - Update user profile
- `DELETE /:id` - Delete user

### Faculty (`/api/faculty`)

- `GET /` - Get all faculty members
- `GET /:id` - Get faculty member by ID
- `POST /` - Add new faculty member
- `PUT /:id` - Update faculty member
- `DELETE /:id` - Delete faculty member

### Students (`/api/students`)

- `GET /` - Get all students
- `GET /:id` - Get student by ID
- `POST /` - Add new student
- `PUT /:id` - Update student
- `DELETE /:id` - Delete student
- `GET /major/:major` - Get students by major
- `GET /year/:year` - Get students by year

### Inquiries (`/api/inquiry`)

- `GET /` - Get all inquiries (with optional filters)
- `GET /:id` - Get inquiry by ID
- `POST /` - Create new inquiry
- `PUT /:id` - Update inquiry
- `DELETE /:id` - Delete inquiry
- `GET /student/:studentId` - Get inquiries by student
- `GET /status/:status` - Get inquiries by status

### Health Check

- `GET /api/health` - Server health check

## Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# JWT Secret (change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Database (for future MongoDB integration)
# MONGODB_URI=mongodb://localhost:27017/qonnect

# Optional: Logging
LOG_LEVEL=info
```

## Development

### Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not implemented yet)

### Project Structure

```
qonnect-backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── routes/            # API route handlers
│   ├── auth.js        # Authentication routes
│   ├── users.js       # User management routes
│   ├── faculty.js     # Faculty management routes
│   ├── students.js    # Student management routes
│   └── inquiry.js     # Inquiry management routes
└── README.md          # This file
```

## Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Tokens**: Secure authentication tokens
- **Input Validation**: express-validator for request validation
- **CORS**: Configured for frontend communication
- **Helmet**: Security headers
- **Morgan**: Request logging

## Future Enhancements

- [ ] MongoDB database integration
- [ ] File upload functionality
- [ ] Email notifications
- [ ] Role-based access control
- [ ] API rate limiting
- [ ] Unit and integration tests
- [ ] Docker containerization

## API Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Error message",
  "details": { ... }
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License 