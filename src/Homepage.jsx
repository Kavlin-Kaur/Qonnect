import React, { useState } from "react";

// Example icons (Heroicons SVGs or similar)
const OpportunityIcon = () => (
  <svg className="inline w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

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

// PlaceholderAvatar: Generates a colored avatar with initials
function PlaceholderAvatar({ name, size = 64, className = "" }) {
  // Pick a color based on name hash
  const colors = [
    "from-pink-400 to-red-400",
    "from-red-400 to-yellow-400",
    "from-purple-400 to-pink-400",
    "from-yellow-400 to-pink-400",
    "from-blue-400 to-purple-400"
  ];
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const color = colors[hash % colors.length];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div
      className={`bg-gradient-to-br ${color} flex items-center justify-center rounded-full text-white font-bold shadow ${className}`}
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
      {initials}
    </div>
  );
}

export default function Homepage({ onLogout }) {
  const [activeTab, setActiveTab] = useState("student");
  const [faqSearch, setFaqSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  // Profile dropdown state
  const [showProfile, setShowProfile] = useState(false);

  // Demo profile (same as featured student)
  const profile = {
    name: "Aanya Verma",
    branch: "Biotechnology",
    year: "2nd Year",
    email: "aanya.verma@qonnect.edu",
    img: "https://randomuser.me/api/portraits/women/32.jpg"
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Qonnect</h1>
          <div className="flex items-center space-x-4 relative">
            {onLogout && (
              <button
                onClick={onLogout}
                className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Logout
              </button>
            )}
            {/* Profile Avatar */}
            <button
              className="focus:outline-none"
              onClick={() => setShowProfile((v) => !v)}
              aria-label="Profile"
            >
              <PlaceholderAvatar name={profile.name} size={40} className="border-2 border-white shadow-md hover:ring-2 hover:ring-pink-200 transition" />
            </button>
            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-14 bg-white text-black rounded-lg shadow-lg w-64 z-50 p-5 animate-fadeIn">
                <div className="flex items-center mb-4">
                  <PlaceholderAvatar name={profile.name} size={48} className="mr-3 border-2 border-red-200" />
                  <div>
                    <div className="font-semibold text-lg text-red-700">{profile.name}</div>
                    <div className="text-xs text-gray-500">{profile.email}</div>
                  </div>
                </div>
                <div className="mb-2 text-sm text-gray-700">{profile.branch} | {profile.year}</div>
                <button
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition mt-2"
                  onClick={onLogout}
                >
                  Logout
                </button>
                <button
                  className="w-full text-xs text-gray-400 mt-2 hover:underline"
                  onClick={() => setShowProfile(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image and Animation */}
      <section className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white py-16 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg animate-fadeIn">Welcome to Qonnect</h2>
          <p className="text-lg md:text-2xl opacity-90 mb-6 font-medium animate-fadeIn delay-100">
            Connecting students & faculty for enquiry, growth, and opportunity.
          </p>
          <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition animate-fadeIn delay-200">
            Join the Community
          </button>
        </div>
        {/* Floating shapes for animation */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-300 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-300 rounded-full opacity-20 animate-bounce-slower"></div>
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
        {activeTab === "inquiry" && <InquirySection faqSearch={faqSearch} setFaqSearch={setFaqSearch} showModal={showModal} setShowModal={setShowModal} />}
        <TestimonialsCarousel />
      </main>

      {/* Modal for submitting a question */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4 text-red-600">Submit a Question</h3>
            <form onSubmit={e => { e.preventDefault(); setShowModal(false); }}>
              <input type="text" placeholder="Your question..." className="w-full border border-gray-300 rounded p-2 mb-4" required />
              <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Submit</button>
            </form>
            <button className="mt-4 text-red-600 hover:underline w-full" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}

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
  // Example featured student
  const featured = {
    name: "Aanya Verma",
    branch: "Biotechnology",
    year: "2nd Year",
    email: "aanya.verma@qonnect.edu",
    about: "Passionate about genetics and research. Loves collaborating on science projects.",
    quote: "Qonnect helped me find my dream internship!",
    img: "https://randomuser.me/api/portraits/women/32.jpg"
  };
  const [connections, setConnections] = useState([
    { id: 1, name: "Rohan Mehta", status: "pending" },
    { id: 2, name: "Fatima Sheikh", status: "accepted" },
    { id: 3, name: "Li Wei", status: "pending" },
    { id: 4, name: "Priya Nair", status: "accepted" },
    { id: 5, name: "Carlos Alvarez", status: "pending" }
  ]);
  const profileProgress = 80;

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

      {/* Featured Student */}
      <div className="flex flex-col sm:flex-row items-center bg-pink-50 p-6 rounded-lg shadow-lg text-center mb-8">
        <PlaceholderAvatar name={featured.name} size={80} className="mb-4 sm:mb-0 sm:mr-6 border-4 border-white shadow" />
        <div>
          <h3 className="text-xl font-medium">{featured.name}</h3>
          <p className="text-gray-600">{featured.branch} | {featured.year}</p>
          <p className="text-gray-500 text-sm mb-2">{featured.email}</p>
          <p className="italic text-gray-600 mb-2">"{featured.quote}"</p>
          <p className="text-xs text-gray-700">{featured.about}</p>
        </div>
      </div>

      {/* Profile Progress */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-1">Profile Completion</label>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-red-500 h-3 rounded-full" style={{ width: `${profileProgress}%` }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{profileProgress}% complete</p>
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
          {["Summer Internship at Google (Deadline: June 30)", "AI/ML Workshop – July 10, 2025", "On-campus Placement Drive – Infosys", "Research Opportunity in Genetics"].map((opp, index) => (
            <li key={index} className="border-b pb-2 border-dashed border-red-200 last:border-0">
              <OpportunityIcon />{opp}
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
        name: "Dr. Priya Deshmukh",
        role: "HOD CSE",
        department: "Computer Science",
        office: "AI Block, Room No. 205",
        phone: "+91 9876543210",
        email: "priya.deshmukh@cse.edu",
        officeHours: "Mon-Fri 10am-12pm",
        research: "AI, Machine Learning, Data Science",
        specialization: "Deep Learning",
        experience: 18,
        linkedin: "https://linkedin.com/in/priyadeshmukh",
        achievements: ["Best Researcher 2023", "NPTEL Gold Medalist"],
        courses: ["AI Fundamentals", "Neural Networks"],
        badges: ["Dean", "Mentor"]
      },
      {
        name: "Dr. Rakesh Jain",
        role: "Assistant Professor",
        department: "Computer Science",
        office: "G Block, Room No. 210",
        phone: "+91 9876543212",
        email: "rakesh.jain@cse.edu",
        officeHours: "Tue-Thu 2pm-4pm",
        research: "Networks, Cybersecurity",
        specialization: "Network Security",
        experience: 10,
        linkedin: "https://linkedin.com/in/rakeshjain",
        achievements: ["Cisco Certified"],
        courses: ["Cybersecurity Basics", "Network Protocols"],
        badges: ["Industry Expert"]
      },
      {
        name: "Dr. Pankaj Sharma",
        role: "Professor",
        department: "Computer Science",
        office: "CSE Block, Room No. 215",
        phone: "+91 9876543213",
        email: "pankaj.sir@cse.edu",
        officeHours: "Mon-Fri 2pm-4pm",
        research: "Distributed Systems, Algorithms",
        specialization: "Parallel Computing",
        experience: 22,
        linkedin: "https://linkedin.com/in/pankajsir",
        achievements: ["Best Teacher Award 2022", "ACM Speaker"],
        courses: ["Algorithms", "Distributed Systems"],
        badges: ["Senior Faculty"]
      },
      {
        name: "Dr. Anurag Verma",
        role: "Senior Faculty",
        department: "Computer Science",
        office: "CSE Block, Room No. 208",
        phone: "+91 9876543214",
        email: "anurag.sir@cse.edu",
        officeHours: "Tue, Thu 11am-1pm",
        research: "Operating Systems, Compilers",
        specialization: "Compiler Design",
        experience: 15,
        linkedin: "https://linkedin.com/in/anuragsir",
        achievements: ["GATE Topper"],
        courses: ["Operating Systems", "Compiler Design"],
        badges: []
      },
      {
        name: "Dr. Nitesh Kumar",
        role: "CSE Faculty",
        department: "Computer Science",
        office: "CSE Block, Room No. 210",
        phone: "+91 9876543215",
        email: "nitesh.sir@cse.edu",
        officeHours: "Mon, Wed, Fri 10am-12pm",
        research: "Web Technologies, Databases",
        specialization: "Database Systems",
        experience: 9,
        linkedin: "https://linkedin.com/in/niteshsir",
        achievements: ["Oracle Certified"],
        courses: ["DBMS", "Web Development"],
        badges: []
      },
      {
        name: "Dr. Piyush Gupta",
        role: "Professor",
        department: "Computer Science",
        office: "CSE Block, Room No. 212",
        phone: "+91 9876543216",
        email: "piyush.sir@cse.edu",
        officeHours: "Mon-Fri 3pm-5pm",
        research: "Software Engineering, Agile",
        specialization: "Agile Methodologies",
        experience: 17,
        linkedin: "https://linkedin.com/in/piyushsir",
        achievements: ["Scrum Master", "Best Mentor 2021"],
        courses: ["Software Engineering", "Project Management"],
        badges: ["Mentor"]
      },
      {
        name: "Ms. Kavlin Kaur",
        role: "Assistant Professor",
        department: "Computer Science",
        office: "CSE Block, Room No. 220",
        phone: "+91 9876543217",
        email: "kavlin.kaur@cse.edu",
        officeHours: "Tue, Thu 9am-11am",
        research: "UI/UX, Frontend Development",
        specialization: "React, Tailwind",
        experience: 5,
        linkedin: "https://linkedin.com/in/kavlinkaur",
        achievements: ["Women in Tech Finalist"],
        courses: ["UI/UX Design", "Frontend Engineering"],
        badges: []
      }
    ],
    agriculture: [
      {
        name: "Dr. Kavita Sharma",
        role: "Professor",
        department: "Agriculture",
        office: "Agri Block, Room 101",
        phone: "+91 9876543220",
        email: "kavita.sharma@agri.edu",
        officeHours: "Mon-Fri 9am-11am",
        research: "Crop Science, Sustainable Farming",
        specialization: "Soil Health",
        experience: 15,
        linkedin: "https://linkedin.com/in/kavitasharma",
        achievements: ["ICAR Award 2022"],
        courses: ["Soil Science", "Agroecology"],
        badges: ["Mentor"]
      }
    ],
    pharma: [
      {
        name: "Dr. Suresh Patil",
        role: "Dean Pharma",
        department: "Pharmacy",
        office: "Pharma Block, Room 201",
        phone: "+91 9876543230",
        email: "suresh.patil@pharma.edu",
        officeHours: "Mon-Fri 11am-1pm",
        research: "Drug Discovery, Pharmacology",
        specialization: "Clinical Trials",
        experience: 20,
        linkedin: "https://linkedin.com/in/sureshpatil",
        achievements: ["Patent Holder", "Pharma Leader 2021"],
        courses: ["Pharmacology", "Drug Design"],
        badges: ["Dean", "Industry Expert"]
      }
    ],
    mba: [
      {
        name: "Dr. Meera Nair",
        role: "Professor",
        department: "MBA",
        office: "MBA Block, Room 301",
        phone: "+91 9876543240",
        email: "meera.nair@mba.edu",
        officeHours: "Tue-Thu 2pm-5pm",
        research: "Marketing, Strategy",
        specialization: "Brand Management",
        experience: 12,
        linkedin: "https://linkedin.com/in/meeranair",
        achievements: ["Case Study Champion"],
        courses: ["Marketing 101", "Strategic Management"],
        badges: ["Visiting"]
      }
    ],
    bba: [
      {
        name: "Mr. Arjun Singh",
        role: "Lecturer",
        department: "BBA",
        office: "BBA Block, Room 401",
        phone: "+91 9876543250",
        email: "arjun.singh@bba.edu",
        officeHours: "Mon, Wed, Fri 10am-12pm",
        research: "Entrepreneurship, Business Analytics",
        specialization: "Startup Management",
        experience: 7,
        linkedin: "https://linkedin.com/in/arjunsingh",
        achievements: ["Startup Mentor"],
        courses: ["Business Analytics", "Entrepreneurship"],
        badges: []
      }
    ],
    law: [
      {
        name: "Dr. Fatima Sheikh",
        role: "HOD Law",
        department: "Law",
        office: "Law Block, Room No. 101",
        phone: "+91 9876543216",
        email: "fatima.sheikh@law.edu",
        officeHours: "Mon-Fri 1pm-3pm",
        research: "Constitutional Law, Human Rights",
        specialization: "Human Rights",
        experience: 14,
        linkedin: "https://linkedin.com/in/fatimash",
        achievements: ["UN Fellow"],
        courses: ["Constitutional Law", "International Law"],
        badges: ["Mentor"]
      }
    ],
    biotech: [
      {
        name: "Dr. Neeraj Malhotra",
        role: "HOD Biotech",
        department: "Biotechnology",
        office: "Bio Block, Room No. 301",
        phone: "+91 9876543218",
        email: "neeraj.malhotra@biotech.edu",
        officeHours: "Mon-Fri 3pm-5pm",
        research: "Genetics, Microbiology",
        specialization: "Genomics",
        experience: 16,
        linkedin: "https://linkedin.com/in/neerajmalhotra",
        achievements: ["INSA Young Scientist"],
        courses: ["Genetics", "Microbiology"],
        badges: ["Dean"]
      }
    ]
  };

  const departmentOptions = [
    { value: "cse", label: "Computer Science" },
    { value: "agriculture", label: "Agriculture" },
    { value: "pharma", label: "Pharmacy" },
    { value: "mba", label: "MBA" },
    { value: "bba", label: "BBA" },
    { value: "law", label: "Law" },
    { value: "biotech", label: "Biotechnology" }
  ];

  // Calculate faculty stats
  const getTotalFaculty = () => {
    return Object.values(facultyData).reduce((total, dept) => total + dept.length, 0);
  };

  const getExperiencedFaculty = () => {
    return Object.values(facultyData).reduce((total, dept) => {
      return total + dept.filter(f => f.experience >= 15).length;
    }, 0);
  };

  const getPhDFaculty = () => {
    return Object.values(facultyData).reduce((total, dept) => {
      return total + dept.filter(f => f.name.startsWith("Dr.")).length;
    }, 0);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Enhanced Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Meet Our Distinguished Faculty</h2>
        <p className="text-gray-600 text-lg mb-8">Shaping Tomorrow's Leaders Through Excellence in Education</p>
        
        {/* Faculty Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{getTotalFaculty()}</div>
            <div className="text-sm text-gray-600">Expert Faculty</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{getExperiencedFaculty()}</div>
            <div className="text-sm text-gray-600">15+ Years Experience</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{getPhDFaculty()}</div>
            <div className="text-sm text-gray-600">PhD Holders</div>
          </div>
        </div>

        {/* Department Filter with enhanced styling */}
        <div className="inline-block relative">
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg py-2 px-4 pr-8 text-gray-700 font-medium hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all cursor-pointer"
          >
            {departmentOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Faculty Cards with subtle animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyData[selectedDept].map((f, i) => (
          <div key={i} className="transform hover:-translate-y-1 transition-transform duration-300">
            <FacultyCard {...f} />
          </div>
        ))}
      </div>

      {/* Department Info */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Looking for specific expertise? Connect with our faculty members directly through email or LinkedIn.
        </p>
      </div>
    </div>
  );
}

function FacultyCard({ name, role, department, office, phone, email, officeHours, research, specialization, experience, linkedin, achievements, courses, badges }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition-all duration-300 flex flex-col items-center border-t-4 border-red-200 relative">
      <div className="absolute top-3 right-3 flex gap-1">
        {badges && badges.map((b, i) => (
          <span key={i} className="bg-gradient-to-r from-pink-400 to-red-400 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-sm">{b}</span>
        ))}
      </div>
      <PlaceholderAvatar name={name} size={64} className="mb-2 border-4 border-white shadow" />
      <h3 className="font-bold text-lg mb-1 text-red-700">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">{role} — {department}</p>
      <div className="text-xs text-gray-500 mb-1">{office}</div>
      <div className="text-xs text-gray-500 mb-1">Office Hours: {officeHours}</div>
      <div className="text-xs text-gray-500 mb-1">Specialization: <span className="text-gray-700 font-medium">{specialization}</span></div>
      <div className="text-xs text-gray-500 mb-1">Experience: <span className="text-gray-700 font-medium">{experience} yrs</span></div>
      <div className="text-xs text-gray-500 mb-1">Research: {research}</div>
      <div className="flex flex-wrap gap-1 my-2">
        {courses && courses.map((c, i) => (
          <span key={i} className="bg-red-50 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium border border-red-100">{c}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 mb-2">
        {achievements && achievements.map((a, i) => (
          <span key={i} className="bg-gray-50 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium border border-gray-100">🏅 {a}</span>
        ))}
      </div>
      <div className="text-xs text-gray-500 mb-1">📞 {phone}</div>
      <div className="text-xs text-gray-500 mb-1">✉️ <a href={`mailto:${email}`} className="text-red-600 hover:underline">{email}</a></div>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-blue-600 hover:underline">LinkedIn</a>
    </div>
  );
}

// ————————————————————————
// Inquiry / FAQ Section
// ————————————————————————

function InquirySection({ faqSearch, setFaqSearch, showModal, setShowModal }) {
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

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes((faqSearch || "").toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Frequently Asked Questions</h2>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={faqSearch}
          onChange={e => setFaqSearch(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full border border-gray-300 rounded p-2"
        />
        <button
          className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={() => setShowModal(true)}
        >
          Submit a Question
        </button>
      </div>
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <p className="text-gray-500">No FAQs found.</p>
        ) : (
          filteredFaqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))
        )}
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

// ————————————————————————
// Testimonials Carousel (simple static version)
// ————————————————————————

function TestimonialsCarousel() {
  const testimonials = [
    { name: "Priya S.", text: "Qonnect made it so easy to get answers from faculty!" },
    { name: "Rahul K.", text: "I found my internship through Qonnect events!" },
    { name: "Simran G.", text: "The FAQ and chat support are super helpful." },
    { name: "Carlos A.", text: "The faculty directory is so easy to use!" },
    { name: "Fatima S.", text: "I love the new Qonnect design!" }
  ];
  return (
    <section className="mt-16 mb-8">
      <h2 className="text-xl font-semibold text-red-700 text-center mb-6">What Our Users Say</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 flex-1 text-center">
            <PlaceholderAvatar name={t.name} size={64} className="mx-auto mb-3" />
            <p className="italic text-gray-700 mb-2">"{t.text}"</p>
            <p className="font-medium text-red-600">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 