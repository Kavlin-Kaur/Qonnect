import React, { useState, useEffect } from "react";
import FinalApp from "./FinalApp";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Effect to listen to URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "student", "faculty", "inquiry"].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial page

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Show login/signup portal if not authenticated
  if (!isAuthenticated) {
    return <FinalApp onAuth={() => setIsAuthenticated(true)} />;
  }

  // Main navigation portal
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Qonnect</h1>
          <nav className="space-x-4 hidden sm:block">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#student" className="hover:underline">Students</a>
            <a href="#faculty" className="hover:underline">Faculty</a>
            <a href="#inquiry" className="hover:underline">Inquiry</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "student" && <StudentPage />}
        {currentPage === "faculty" && <FacultyPage />}
        {currentPage === "inquiry" && <InquiryPage />}
      </main>

      {/* Footer / Mobile Nav */}
      <footer className="bg-red-600 text-white py-3 text-center text-sm">
        <p>© 2025 Qonnect. All rights reserved.</p>
        <nav className="mt-2 space-x-4 sm:hidden">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#student" className="hover:underline">Students</a>
          <a href="#faculty" className="hover:underline">Faculty</a>
          <a href="#inquiry" className="hover:underline">Inquiry</a>
        </nav>
      </footer>
    </div>
  );
}

// Home Page Component
function HomePage({ setCurrentPage }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-red-700">Welcome to Qonnect</h2>
      <p className="mb-6 text-gray-700">
        Connect with students, faculty, and explore opportunities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PageCard title="Students" link="#student" onClick={() => setCurrentPage("student")} />
        <PageCard title="Faculty" link="#faculty" onClick={() => setCurrentPage("faculty")} />
        <PageCard title="Inquiry" link="#inquiry" onClick={() => setCurrentPage("inquiry")} />
      </div>
    </div>
  );
}

// Reusable Card for Home Page
function PageCard({ title, link, onClick }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="block bg-red-100 p-6 rounded-lg shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-medium text-red-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">View and manage {title.toLowerCase()} section</p>
    </a>
  );
}

// Student Page Component
function StudentPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-red-700">Student Section</h2>

      {/* Profile */}
      <div className="mb-6 text-center">
        <h3 className="text-lg font-medium">Welcome, Kavlin!</h3>
        <p className="text-gray-600">Computer Science Engineering | 3rd Year</p>
      </div>

      {/* Recent Opportunities */}
      <div className="bg-white p-5 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-3 text-red-600">Recent Opportunities</h3>
        <ul className="space-y-2">
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
      </div>

      {/* Connections */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3 text-red-600">Connections</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["Mrizzu", "Kartik", "Apurva", "Samiksha"].map((name, index) => (
            <ConnectionCard key={index} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Faculty Page Component
function FacultyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-red-700">Faculty Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Dr. Pankaj Sir",
            role: "HOD of CSE",
            room: "Room No. 205",
            phone: "+91 9876543210",
            email: "pankaj.sir@cse.edu"
          },
          {
            name: "Anurag Sir",
            role: "Senior Faculty",
            room: "Room No. 208",
            phone: "+91 9876543211",
            email: "anurag.sir@cse.edu"
          },
          {
            name: "Nitesh Sir",
            role: "CSE Faculty",
            room: "Room No. 210",
            phone: "+91 9876543212",
            email: "nitesh.sir@cse.edu"
          },
          {
            name: "Piyush Sir",
            role: "Professor",
            room: "Room No. 212",
            phone: "+91 9876543213",
            email: "piyush.sir@cse.edu"
          }
        ].map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
}

// Inquiry Page Component
function InquiryPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-red-700">Inquiry / FAQ</h2>

      {/* FAQs */}
      <div className="space-y-3 mb-6">
        {[
          {
            q: "How do I apply for internships?",
            a: "You can apply through the Qonnect portal under the 'Opportunities' tab."
          },
          {
            q: "Can I connect with faculty directly?",
            a: "Yes! You can send connection requests which they can accept or reject."
          },
          {
            q: "What if my question isn't listed here?",
            a: "Use the chatbot below or contact our support team directly."
          }
        ].map((faq, index) => (
          <FaqItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>

      {/* Chatbot Placeholder */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="font-medium text-red-600 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Use our chatbot or drop us an email.
        </p>
        <button className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
          Open Chatbot
        </button>
      </div>
    </div>
  );
}

// Connection Card Component
function ConnectionCard({ name }) {
  const [status, setStatus] = useState("pending");

  const handleAction = (action) => {
    setStatus(action === "accept" ? "connected" : "rejected");
  };

  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-red-200 rounded-full flex items-center justify-center text-red-700 font-semibold text-lg mb-2">
        {name.charAt(0)}
      </div>
      <p className="font-medium">{name}</p>
      {status === "pending" && (
        <div className="mt-2 space-x-2">
          <button
            onClick={() => handleAction("accept")}
            className="text-xs text-green-600 hover:underline"
          >
            Accept
          </button>
          <button
            onClick={() => handleAction("reject")}
            className="text-xs text-red-600 hover:underline"
          >
            Reject
          </button>
        </div>
      )}
      {status === "connected" && <p className="text-xs text-green-600 mt-2">Connected ✅</p>}
      {status === "rejected" && <p className="text-xs text-red-600 mt-2">Rejected ❌</p>}
    </div>
  );
}

// Faculty Card Component
function FacultyCard({ name, role, room, phone, email }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <div className="w-16 h-16 mx-auto bg-red-200 rounded-full flex items-center justify-center text-red-700 font-semibold text-lg mb-3">
        {name.charAt(0)}
      </div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
      <div className="mt-2 text-left text-xs text-gray-500 space-y-1">
        <p>📍 {room}</p>
        <p>📞 {phone}</p>
        <p>✉️ {email}</p>
      </div>
    </div>
  );
}

// FAQ Item Component
function FaqItem({ question, answer }) {
  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <h4 className="font-medium text-red-600">{question}</h4>
      <p className="text-sm text-gray-600 mt-1">{answer}</p>
    </div>
  );
}
