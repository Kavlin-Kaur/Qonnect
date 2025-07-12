// Import React
import React, { useState } from 'react';

// Enhanced Inquiry & Chat page with comprehensive FAQ - Blue & White theme
function Inquiry() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState(null);

  // Comprehensive FAQ data organized by categories
  const faqData = {
    general: [
      {
        q: 'What is Qonnect?',
        a: 'Qonnect is an academic networking platform designed to connect students and faculty members. It provides features for networking, collaboration, and communication within the academic community.'
      },
      {
        q: 'How do I get started with Qonnect?',
        a: 'Simply sign up for an account, complete your profile, and start exploring! You can connect with other students, browse faculty directories, and participate in various academic activities.'
      },
      {
        q: 'Is Qonnect free to use?',
        a: 'Yes, Qonnect is completely free for all students and faculty members. There are no hidden fees or premium features.'
      },
      {
        q: 'How do I update my profile information?',
        a: 'Go to your profile page and click the edit button. You can update your personal information, skills, interests, and other details at any time.'
      }
    ],
    students: [
      {
        q: 'How do I connect with other students?',
        a: 'Use the swipe feature in the Student Hub to discover and connect with fellow students. You can also join study groups and participate in events to meet new people.'
      },
      {
        q: 'Can I find study partners on Qonnect?',
        a: 'Absolutely! You can search for students with similar interests, join study groups, or create your own study group to find the perfect study partners.'
      },
      {
        q: 'How do I contact faculty members?',
        a: 'Browse the faculty directory to find professors in your field of interest. You can send connection requests and message them directly through the platform.'
      },
      {
        q: 'What should I include in my student profile?',
        a: 'Include your academic year, department, skills, interests, GPA, and a brief bio. This helps other students and faculty understand your background and interests.'
      },
      {
        q: 'How do I join events and activities?',
        a: 'Check the events section on the homepage for upcoming activities. Click "Register Now" to join events that interest you.'
      }
    ],
    faculty: [
      {
        q: 'How can faculty members use Qonnect?',
        a: 'Faculty can create detailed profiles, share research interests, connect with students and colleagues, and post opportunities for students.'
      },
      {
        q: 'Can I post research opportunities for students?',
        a: 'Yes! Faculty members can post research opportunities, internships, and project collaborations for students to discover and apply.'
      },
      {
        q: 'How do I manage student connections?',
        a: 'You can accept or decline connection requests from students, and manage your network through the faculty dashboard.'
      },
      {
        q: 'Can I create study groups or workshops?',
        a: 'Faculty members can create and manage study groups, workshops, and academic events for students to participate in.'
      }
    ],
    technical: [
      {
        q: 'What browsers are supported?',
        a: 'Qonnect works best on Chrome, Firefox, Safari, and Edge. Make sure you have the latest version for the best experience.'
      },
      {
        q: 'How do I reset my password?',
        a: 'Go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email.'
      },
      {
        q: 'Can I use Qonnect on my mobile device?',
        a: 'Yes! Qonnect is fully responsive and works great on smartphones and tablets. You can access all features from your mobile browser.'
      },
      {
        q: 'How do I report a technical issue?',
        a: 'If you encounter any technical problems, please contact our support team through the inquiry form or email us directly.'
      },
      {
        q: 'Is my data secure on Qonnect?',
        a: 'Yes, we take data security seriously. All your personal information is encrypted and protected according to industry standards.'
      }
    ]
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Inquiry & Support Center</h1>
          <p className="text-xl text-white/80">Get help, find answers, and connect with our community</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Chat with Bot */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🤖 AI Assistant</h3>
              <p className="text-white/80 mb-4">Get instant answers to your questions with our AI chatbot.</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                Start Chat
              </button>
            </div>

            {/* Contact Support */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">📞 Contact Support</h3>
              <p className="text-white/80 mb-4">Need personalized help? Reach out to our support team.</p>
              <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                Contact Us
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🔗 Quick Links</h3>
              <div className="space-y-3">
                <button className="w-full text-left text-white/80 hover:text-white transition-colors">
                  📚 Student Guide
                </button>
                <button className="w-full text-left text-white/80 hover:text-white transition-colors">
                  👨‍🏫 Faculty Guide
                </button>
                <button className="w-full text-left text-white/80 hover:text-white transition-colors">
                  🎯 Events Calendar
                </button>
                <button className="w-full text-left text-white/80 hover:text-white transition-colors">
                  📋 Terms of Service
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              
              {/* FAQ Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.keys(faqData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeCategory === category
                        ? 'bg-white text-gray-800'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData[activeCategory].map((faq, index) => (
                  <div key={index} className="bg-white/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/20 transition-colors"
                    >
                      <span className="font-semibold text-white">{faq.q}</span>
                      <span className="text-white text-xl">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-white/80 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
          <p className="text-white/80 mb-6">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              📧 Email Support
            </button>
            <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              💬 Live Chat
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              📞 Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiry; 