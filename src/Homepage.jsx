import React, { useState } from "react";

// Event Card Component
function EventCard({ title, date, desc, img }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-red-600 text-sm mb-2">{date}</p>
        <p className="text-gray-600">{desc}</p>
        <button className="mt-4 text-red-600 hover:text-red-700 font-medium">
          Learn More →
        </button>
      </div>
    </div>
  );
}

const sectionData = {
  student: {
    title: "Student Section",
    desc: "Connect with peers, find opportunities, and grow your network all in one place.",
    btn: "View All Students",
  },
  faculty: {
    title: "Faculty Section",
    desc: "Meet experienced mentors and get guidance directly from faculty members.",
    btn: "View All Faculty",
  },
  inquiry: {
    title: "Inquiry",
    desc: "Check our FAQ section or reach out to us directly for assistance.",
    btn: "View FAQ",
  },
};

export default function Homepage({ onLogout }) {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Qonnect</h1>
          <button
            onClick={onLogout}
            className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white py-16 px-4 text-center">
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">Welcome to Qonnect</h2>
          <p className="text-lg md:text-2xl opacity-90 mb-6 font-medium">Connecting students & faculty for enquiry</p>
        </div>
        {/* Optional Background Image Overlay */}
        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80")'
        }}></div>
      </section>

      {/* Toggle Navigation */}
      <div className="container mx-auto px-4 mt-8 flex justify-center">
        <div className="inline-flex rounded-lg shadow bg-gray-100">
          {Object.keys(sectionData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors duration-200 focus:outline-none ${activeTab === key ? "bg-red-600 text-white" : "text-red-600 hover:bg-red-200"}`}
            >
              {sectionData[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">{sectionData[activeTab].title}</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">{sectionData[activeTab].desc}</p>
        <a
          href="#"
          className="px-6 py-3 bg-red-600 text-white rounded-full inline-block hover:bg-red-700 transition"
        >
          {sectionData[activeTab].btn}
        </a>
      </section>

      {/* Latest Events / News Section */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-red-700 text-center mb-8">Latest Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Summer Internship Drive",
                date: "July 10, 2025",
                desc: "Join leading tech companies for summer internships.",
                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "AI & ML Workshop",
                date: "August 15, 2025",
                desc: "Hands-on session by industry experts on AI and Machine Learning.",
                img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Career Guidance Seminar",
                date: "September 1, 2025",
                desc: "Get tips from alumni and placement officers for better career planning.",
                img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Peer Networking Event",
                date: "September 15, 2025",
                desc: "Meet and connect with fellow students and faculty.",
                img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Women in Tech Meetup",
                date: "October 5, 2025",
                desc: "Empowering women in STEM fields through networking.",
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Startup Pitch Day",
                date: "October 20, 2025",
                desc: "Pitch your ideas and connect with mentors and investors.",
                img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80"
              }
            ].map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Qonnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 