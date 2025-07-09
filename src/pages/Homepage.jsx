// Import React and the useState hook for managing component state
import React, { useState } from 'react';

// Create the Homepage component function
const Homepage = () => {
  // Create state to track which tab is currently active
  // Start with 'students' tab selected by default
  const [currentTab, setCurrentTab] = useState('students');

  // Return the JSX (HTML-like code) that will be displayed
  return (
    // Main container - full screen height, light gray background
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero section - gradient background with welcome message */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-16">
        {/* Container for hero content - centered and responsive */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Main heading */}
          <h1 className="text-4xl font-bold mb-4">Welcome to Qonnect</h1>
          {/* Subtitle */}
          <p className="text-xl">Connect with students, faculty, and explore opportunities</p>
        </div>
      </div>

      {/* Main content area - navigation tabs and content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation tabs - allow users to switch between sections */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          {/* Map through tab names to create tab buttons */}
          {['students', 'faculty', 'inquiry'].map((tab) => (
            // Each tab button
            <button
              key={tab} // React needs a unique key for each item in a list
              onClick={() => setCurrentTab(tab)} // Change active tab when clicked
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                currentTab === tab
                  ? 'bg-red-500 text-white' // Active tab styling
                  : 'text-gray-600 hover:text-red-500' // Inactive tab styling
              }`}
            >
              {/* Capitalize first letter of tab name for display */}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content container - white background, rounded corners, shadow */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          
          {/* Students section - only show if students tab is active */}
          {currentTab === 'students' && (
                  <div>
              {/* Section heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Section</h2>
              
              {/* Grid layout for student content - responsive columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Opportunities card */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {/* Card heading */}
                  <h3 className="font-semibold text-gray-800 mb-2">Recent Opportunities</h3>
                  {/* List of opportunities */}
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Summer Internship at Google</li>
                    <li>• AI/ML Workshop – July 10, 2025</li>
                    <li>• On-campus Placement Drive</li>
                  </ul>
                </div>
                
                {/* Connections card */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {/* Card heading */}
                  <h3 className="font-semibold text-gray-800 mb-2">Your Connections</h3>
                  {/* Connection avatars */}
                  <div className="flex space-x-2">
                    {/* Map through connection names to create avatar circles */}
                    {['Mrizzu', 'Kartik', 'Apurva'].map((name) => (
                      <div key={name} className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-medium">
                        {name[0]} {/* Show first letter of name */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            )}

          {/* Faculty section - only show if faculty tab is active */}
          {currentTab === 'faculty' && (
            <div>
              {/* Section heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Faculty Directory</h2>
              
              {/* Grid layout for faculty cards - responsive columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Map through faculty data to create faculty cards */}
                {[
                  { name: 'Dr. Pankaj', role: 'HOD CSE', room: '205' },
                  { name: 'Anurag Sir', role: 'Senior Faculty', room: '208' },
                  { name: 'Nitesh Sir', role: 'CSE Faculty', room: '210' }
                ].map((faculty) => (
                  // Each faculty card
                  <div key={faculty.name} className="bg-gray-50 p-4 rounded-lg text-center">
                    {/* Faculty avatar - circle with first letter */}
                    <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-semibold mx-auto mb-2">
                      {faculty.name[0]} {/* First letter of faculty name */}
        </div>
                    {/* Faculty name */}
                    <h3 className="font-semibold text-gray-800">{faculty.name}</h3>
                    {/* Faculty role */}
                    <p className="text-sm text-gray-600">{faculty.role}</p>
                    {/* Faculty room number */}
                    <p className="text-xs text-gray-500">Room {faculty.room}</p>
        </div>
                ))}
          </div>
        </div>
      )}

          {/* Inquiry section - only show if inquiry tab is active */}
          {currentTab === 'inquiry' && (
            <div>
              {/* Section heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ & Inquiry</h2>
              
              {/* FAQ items container */}
              <div className="space-y-4">
                
                {/* FAQ item 1 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {/* FAQ question */}
                  <h3 className="font-semibold text-gray-800 mb-2">How do I apply for internships?</h3>
                  {/* FAQ answer */}
                  <p className="text-gray-600">You can apply through the Qonnect portal under the 'Opportunities' tab.</p>
      </div>

                {/* FAQ item 2 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {/* FAQ question */}
                  <h3 className="font-semibold text-gray-800 mb-2">Can I connect with faculty directly?</h3>
                  {/* FAQ answer */}
                  <p className="text-gray-600">Yes! You can send connection requests which they can accept or reject.</p>
      </div>

                {/* Help section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {/* Help heading */}
                  <h3 className="font-semibold text-gray-800 mb-2">Need more help?</h3>
                  {/* Chatbot button */}
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Open Chatbot
          </button>
        </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default Homepage; 