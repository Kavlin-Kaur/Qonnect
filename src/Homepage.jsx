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
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Qonnect</h1>
          {onLogout && (
            <button
              onClick={onLogout}
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white py-16 px-4 text-center">
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">Welcome to Qonnect</h2>
          <p className="text-lg md:text-2xl opacity-90 mb-6 font-medium">
            Connecting students & faculty for enquiry
          </p>
        </div>
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80")'
          }}
        ></div>
      </section>

      {/* Navigation Buttons */}
      <nav className="bg-white border-b border-red-200 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center space-x-8 py-3">
          <button
            onClick={() => setActiveTab("student")}
            className={`font-medium ${activeTab === "student" ? "text-red-700 underline" : "text-red-600 hover:text-red-800"}`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveTab("faculty")}
            className={`font-medium ${activeTab === "faculty" ? "text-red-700 underline" : "text-red-600 hover:text-red-800"}`}
          >
            Faculty
          </button>
          <button
            onClick={() => setActiveTab("inquiry")}
            className={`font-medium ${activeTab === "inquiry" ? "text-red-700 underline" : "text-red-600 hover:text-red-800"}`}
          >
            Inquiry
          </button>
        </div>
      </nav>

      {/* Middle Content Area */}
      <main className="flex-grow container mx-auto px-4 py-10">
        {activeTab === "student" && <StudentSection />}
        {activeTab === "faculty" && <FacultySection />}
        {activeTab === "inquiry" && <InquirySection />}
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-4 text-center text-sm">
        <p>© 2025 Qonnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ————————————————————————
// Student Section
// ————————————————————————

function StudentSection() {
  const [connections, setConnections] = useState([
    { id: 1, name: "Mrizzu", status: "pending" },
    { id: 2, name: "Apurva", status: "accepted" },
    { id: 3, name: "Samiksha", status: "pending" }
  ]);

  const handleAction = (id, action) => {
    setConnections((prev) =>
      prev.map((conn) =>
        conn.id === id ? { ...conn, status: action } : conn
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Student Dashboard</h2>

      {/* Profile Preview */}
      <div className="bg-red-50 p-6 rounded-lg shadow-lg text-center mb-8">
        <h3 className="text-xl font-medium">Welcome, Kavlin!</h3>
        <p className="text-gray-600">Computer Science Engineering | 3rd Year</p>
      </div>

      {/* Connection Requests */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-red-600">Connection Requests</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {connections.map((conn) => (
            <ConnectionCard key={conn.id} {...conn} onAction={handleAction} />
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-red-600">Latest Opportunities</h3>
        <ul className="space-y-2 bg-white p-5 rounded shadow">
          {[
            "Summer Internship at Google (Deadline: June 30)",
            "AI/ML Workshop – July 10, 2025",
            "On-campus Placement Drive – Infosys",
            "Research Opportunity in Cybersecurity"
          ].map((opp, index) => (
            <li key={index} className="border-b pb-2 border-dashed border-red-200 last:border-0">
              {opp}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ConnectionCard({ id, name, status, onAction }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <div className="w-16 h-16 mx-auto bg-red-200 rounded-full flex items-center justify-center text-red-700 font-semibold text-lg mb-2">
        {name.charAt(0)}
      </div>
      <p className="font-medium">{name}</p>
      {status === "pending" && (
        <div className="mt-2 space-x-2">
          <button
            onClick={() => onAction(id, "accepted")}
            className="text-xs text-green-600 hover:underline"
          >
            Accept
          </button>
          <button
            onClick={() => onAction(id, "rejected")}
            className="text-xs text-red-600 hover:underline"
          >
            Reject
          </button>
        </div>
      )}
      {status === "accepted" && <p className="text-xs text-green-600 mt-2">Connected ✅</p>}
      {status === "rejected" && <p className="text-xs text-red-600 mt-2">Rejected ❌</p>}
    </div>
  );
}

// ————————————————————————
// Faculty Section
// ————————————————————————

function FacultySection() {
  const [selectedDept, setSelectedDept] = useState("cse");

  const facultyData = {
    cse: [
      {
        name: "Dr. Pankaj Vaidya",
        role: "HOD CSE",
        room: "AI Block, Room No. 205",
        phone: "+91 9876543210",
        email: "pankaj.vaidya@cse.edu"
      },
      {
        name: "Nitesh Sharma",
        role: "Assistant Professor",
        room: "G Block, Room No. 210",
        phone: "+91 9876543212",
        email: "nitesh.sharma@cse.edu"
      },
      {
        name: "Anurag Singh",
        role: "Senior Lecturer",
        room: "G Block, Room No. 208",
        phone: "+91 9876543211",
        email: "anurag.singh@cse.edu"
      },
      {
        name: "Dr. Sonia Gupta",
        role: "Professor",
        room: "E Block, Room No. 212",
        phone: "+91 9876543214",
        email: "sonia.gupta@cse.edu"
      }
    ],
    law: [
      {
        name: "Dr. Priya Deshmukh",
        role: "HOD Law",
        room: "Law Block, Room No. 101",
        phone: "+91 9876543216",
        email: "priya.deshmukh@law.edu"
      },
      {
        name: "Dr. Rakesh Jain",
        role: "Senior Lecturer",
        room: "Law Block, Room No. 102",
        phone: "+91 9876543217",
        email: "rakesh.jain@law.edu"
      }
    ],
    biotech: [
      {
        name: "Dr. Neeraj Malhotra",
        role: "HOD Biotech",
        room: "Bio Block, Room No. 301",
        phone: "+91 9876543218",
        email: "neeraj.malhotra@biotech.edu"
      },
      {
        name: "Dr. Anjali Rawat",
        role: "Assistant Professor",
        room: "Bio Block, Room No. 305",
        phone: "+91 9876543219",
        email: "anjali.rawat@biotech.edu"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Faculty Directory</h2>

      {/* Department Filter */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          className="border border-red-300 rounded p-2 text-red-600 font-medium"
        >
          <option value="cse">Computer Science</option>
          <option value="law">Law</option>
          <option value="biotech">Biotechnology</option>
        </select>
      </div>

      {/* Faculty Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyData[selectedDept].map((f, i) => (
          <FacultyCard key={i} {...f} />
        ))}
      </div>
    </div>
  );
}

function FacultyCard({ name, role, room, phone, email }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-semibold text-lg mr-4 float-left">
        {name.charAt(0)}
      </div>
      <div className="ml-16">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="text-xs text-gray-500 mt-2 space-y-1">
          <p>📍 {room}</p>
          <p>📞 {phone}</p>
          <p>✉️ {email}</p>
        </div>
      </div>
    </div>
  );
}

// ————————————————————————
// Inquiry / FAQ Section
// ————————————————————————

function InquirySection() {
  const faqs = [
    {
      q: "Where is G Block located?",
      a: "G Block is near the main gate, opposite the parking area."
    },
    {
      q: "What happens if I fail a subject?",
      a: "You'll be allowed to reappear for exams during the next semester."
    },
    {
      q: "Is attending bootcamp mandatory?",
      a: "Yes, bootcamp attendance is compulsory for all first-year students."
    },
    {
      q: "Can I change my branch after 1st year?",
      a: "Yes, but only within certain eligible branches and based on CGPA."
    },
    {
      q: "How do I apply for internships?",
      a: "Through the Qonnect portal under 'Opportunities'."
    },
    {
      q: "Are there scholarships available?",
      a: "Yes! Based on merit, need, and sports achievements."
    },
    {
      q: "When are the end semesters?",
      a: "End Sem Exams usually start in December and May."
    },
    {
      q: "How many leaves are allowed per semester?",
      a: "Maximum 10% attendance can be missed without penalty."
    },
    {
      q: "Are late night labs allowed?",
      a: "Only with prior approval from faculty or lab incharge."
    },
    {
      q: "Can I take part in extracurriculars?",
      a: "Yes! All students are encouraged to participate."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="font-medium text-red-600">{question}</h4>
      <p className="text-sm text-gray-600 mt-1">{answer}</p>
    </div>
  );
} 