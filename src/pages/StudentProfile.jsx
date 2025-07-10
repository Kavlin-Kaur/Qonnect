// Import React and useState for managing component state
import React, { useState } from 'react';

// Simple Student Profile page
function StudentProfile() {
  // State to track if we're in edit mode
  const [isEditing, setIsEditing] = useState(false);
  
  // Simple student profile data
  const [profile, setProfile] = useState({
    name: 'Rahul Kumar',
    email: 'rahul.kumar@shoolini.edu.in',
    department: 'Computer Science',
    year: '2nd Year',
    bio: 'Passionate about technology and innovation.',
    interests: 'AI, Web Development, Machine Learning'
  });

  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Function to save changes
  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved:', profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-red-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
            {profile.name[0]}
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">My Profile</h2>
        </div>

        {/* Edit/View toggle */}
        <div className="flex justify-end mb-6">
          {isEditing ? (
            <div className="flex gap-2">
              <button 
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Save
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
            ) : (
              <p className="text-white font-medium">{profile.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
            ) : (
              <p className="text-white font-medium">{profile.email}</p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Department</label>
            {isEditing ? (
              <select
                value={profile.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50"
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Management">Management</option>
              </select>
            ) : (
              <p className="text-white font-medium">{profile.department}</p>
            )}
          </div>

          {/* Year */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Year</label>
            {isEditing ? (
              <select
                value={profile.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50"
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            ) : (
              <p className="text-white font-medium">{profile.year}</p>
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Bio</label>
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows="3"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50 resize-none"
              />
            ) : (
              <p className="text-white">{profile.bio}</p>
            )}
          </div>

          {/* Interests */}
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Interests</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.interests}
                onChange={(e) => handleInputChange('interests', e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                placeholder="e.g., AI, Web Development, Machine Learning"
              />
            ) : (
              <p className="text-white">{profile.interests}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile; 