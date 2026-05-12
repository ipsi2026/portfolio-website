import {
  House,
  User,
  FolderGit2,
  Mail,
  Code2,
  Database,
  ShieldCheck,
  Cloud
} from "lucide-react"

import profile from "./assets/profile.jpeg"

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>
       
       {/* Navbar */}
<nav className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-gray-800">

  <h1 className="text-3xl font-bold text-cyan-400">
    Ipsita.dev
  </h1>

  <div className="hidden md:flex gap-8 text-gray-300">

    {/* Home */}
    <a
      href="#home"
      className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition"
    >
      <House size={20} />
      <span>Home</span>
    </a>

    {/* About */}
    <a
      href="#about"
      className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition"
    >
      <User size={20} />
      <span>About</span>
    </a>

    {/* Projects */}
    <a
      href="#projects"
      className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition"
    >
      <FolderGit2 size={20} />
      <span>Projects</span>
    </a>

    {/* Contact */}
    <a
      href="#footer"
      className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition"
    >
      <Mail size={20} />
      <span>Contact</span>
    </a>

  </div>

</nav>
     
      {/* Hero Section */}
      <section
       id="home"
  className="relative z-10 flex flex-col items-center justify-center text-center min-h-[85vh] px-6"
> 
        {/* Profile Image */}
        <div className="w-44 h-44 rounded-full border-4 border-cyan-400 mb-8 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition duration-300">

          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />

        </div>

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Ipsita Giri
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Aspiring Software Developer & AI Enthusiast
        </h2>

        <p className="max-w-3xl text-gray-400 text-lg leading-8 mb-10">
          I build modern web applications, AI-powered systems,
          and cybersecurity-focused projects using React,
          FastAPI, Python, and cloud technologies.
        </p>

        

      </section>

      {/* About Section */}
      <section
      id="about"
  className="relative z-10 px-10 py-24"
> 

        <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg hover:border-cyan-400 transition duration-300">

            <h3 className="text-3xl font-semibold mb-6">
              Who Am I?
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I am an aspiring software developer passionate about
              building AI-powered applications, cybersecurity systems,
              and modern web experiences.

              I enjoy solving real-world problems using Python,
              React, FastAPI, APIs, databases, and cloud technologies.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg hover:border-cyan-400 transition duration-300">

            <h3 className="text-3xl font-semibold mb-6">
              Certifications & Learning
            </h3>

            <ul className="space-y-4 text-gray-400 text-lg">

              <li>✔ Google IT Automation with Python</li>

              <li>✔ Git & GitHub</li>

              <li>✔ Configuration Management</li>

              <li>✔ Cloud & DevOps Fundamentals</li>

              <li>✔ Cybersecurity Learning</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section 
      id="skills"
      className="relative z-10 px-10 py-24">

        <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Skill Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <Code2 className="mx-auto mb-4 text-cyan-400" size={50} />

            <h3 className="text-2xl font-semibold mb-4">
              Frontend
            </h3>

            <p className="text-gray-400">
              React, Tailwind CSS, JavaScript
            </p>

          </div>

          {/* Skill Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <Database className="mx-auto mb-4 text-cyan-400" size={50} />

            <h3 className="text-2xl font-semibold mb-4">
              Backend
            </h3>

            <p className="text-gray-400">
              Python, FastAPI, APIs, SQL
            </p>

          </div>

          {/* Skill Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <ShieldCheck className="mx-auto mb-4 text-cyan-400" size={50} />

            <h3 className="text-2xl font-semibold mb-4">
              Security
            </h3>

            <p className="text-gray-400">
              Cybersecurity & Monitoring Systems
            </p>

          </div>

          {/* Skill Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <Cloud className="mx-auto mb-4 text-cyan-400" size={50} />

            <h3 className="text-2xl font-semibold mb-4">
              Cloud
            </h3>

            <p className="text-gray-400">
              DevOps, Cloud Basics, GitHub
            </p>

          </div>

        </div>

      </section>
  

   {/* Projects Section */}
<section
  id="projects"
  className="relative z-10 px-10 py-24"
>

  <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {/* Project Card */}
    <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="project"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-4">
          Agentic Cybersecurity AI
        </h3>

        <p className="text-gray-400 mb-6 leading-7">
          AI-powered cybersecurity monitoring platform with
          intelligent threat analysis, FastAPI backend,
          automation workflows, and real-time alert systems.
        </p>

        <a
          href="https://github.com/ipsi2026/agentic-cybersecurity-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
        >
          View on GitHub
        </a>

      </div>

    </div>

    {/* Project Card */}
    <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
        alt="project"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-4">
          MediAssist AI
        </h3>

        <p className="text-gray-400 mb-6 leading-7">
          AI-powered healthcare assistant with intelligent
          disease search, CSV-based knowledge retrieval,
          FastAPI backend, and smart response generation.
        </p>

        <a
          href="https://github.com/ipsi2026/MediAssist_AI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
        >
          View on GitHub
        </a>

      </div>

    </div>

    {/* Project Card */}
    <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        alt="project"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-4">
          Z-Secure
        </h3>

        <p className="text-gray-400 mb-6 leading-7">
          Secure networking and cybersecurity-focused platform
          designed for privacy, monitoring, and protected
          digital communication workflows.
        </p>

        <a
          href="https://z-secure.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
        >
          Live Demo
        </a>

      </div>

    </div>

  </div>

</section>
{/* Contact Section */}
<section
  id="footer"
  className="relative z-10 px-10 py-24"
>

  <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
    Contact Me
  </h2>

  <div className="w-full px-6 bg-gray-900/40 backdrop-blur-lg border border-gray-800 rounded-3xl p-10 ">

    <p className="text-center text-gray-400 text-lg leading-8 mb-12">
      I’m always open to discussing new opportunities,
      collaborations, AI projects, and software development work.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-center">

      {/* Email */}
      <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">

        <Mail className="mx-auto mb-4 text-cyan-400" size={40} />

        <h3 className="text-2xl font-semibold mb-3">
          Email
        </h3>

        <p className="text-gray-400 break-words">
          giriipsita2026@gmail.com
        </p>

      </div>

      {/* GitHub */}
      <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">

        <FolderGit2 className="mx-auto mb-4 text-cyan-400" size={40} />

        <h3 className="text-2xl font-semibold mb-3">
          GitHub
        </h3>

        <a
          href="https://github.com/ipsi2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          github.com/ipsi2026
        </a>

      </div>

      {/* LinkedIn */}
      <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">

        <User className="mx-auto mb-4 text-cyan-400" size={40} />

        <h3 className="text-2xl font-semibold mb-3">
          LinkedIn
        </h3>

        <a  href="https://www.linkedin.com/in/ipsita-giri-4237ba398/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-cyan-400 transition">
          
          LinkedIn Profile 
        </a>

      </div>

    </div>

  </div>

  {/* Footer */}
  <div className="text-center text-gray-500 mt-16 border-t border-gray-800 pt-8">

    © 2026 Ipsita Giri. All rights reserved.

  </div>

</section>
    </div>
  )
}

export default App