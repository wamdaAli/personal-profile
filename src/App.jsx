import './App.css'
function App() {
  return(
    <div className="min-h-screen text-gray-800 font-sans px-6 py-12">

      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-gray-700">Wamda Ali</h1>
        <p className="mt-2 text-x1 text-gray-800 font-medium">Computer Science Graduate | Software Engineering Enthusiast</p>
        <p className="mt-2 text-gray-600">
          Passionate about building impactful solutions, solving real-world problems, and continuously learning in tech.
        </p>
      </header>

      {/* Skills + Certifications*/}
      <section className="max-w-4l mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-y-2 text-gray-700">
            <span>Java</span>
            <span>Python</span>
            <span>C++</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Oracle SQL</span>
            <span>Git/GitHub</span>
            <span>Tailwind CSS</span>
            <span>HTML/CSS</span>
            <span>Spring Boot</span>
            <span>Doxygen</span>
            <span>Catch2</span>
            <span>JUnit</span>
            <span>AWS</span>
          </div>
        </div>
      
        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AWS Fundamentals Specialization - Coursera</li>
            <li>J.P Morgan Software Engineering - Forage</li>
            <li>Accenture Coding: Development and Advanced Engineering - Forage</li>
          </ul>
        </div>
      </section>

      {/* Projects Sections */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Personal Profile Website:</strong> Built with React and Tailwind CSS to showcase my skills and projects.
          </li>
          <li>
            <strong>MindLink - Mental Wellness App:</strong> An accessible, full-stack Java desktop app to help users manage and improve mental wellbeing using MySQL for backend. A safe and secure platform that integrates tracking, data visualisation, journalling, and community building features.
          </li>
          <li>
            <strong>Accenture Coding: Development and Advanced Engineering Project: </strong> Supported a client overwhelmed by the growth of their code base. Built Java-based data search modules with Spring Boot to improve data flow and accessibility and set up Jenikins fo automated builds and CI/CD validation on code commits on every push. Managed team's workload by preparing for a sprint and writing user stories in an Agile planning session.
          </li>
          <li>
            <strong>J.P Morgan Software Engineering Project: </strong> Developed a Python-based live data visualisation dashboard using Perspective, translating complex datasets into clear insights.
          </li>
        </ul>
      </section>

      {/* Contact Section*/}
        <div className="mt-4 flex justify-center text-sm text-blue-600 font-medium space-x-6">
          <a href="mailto:wamda99ali@gmail.com" className="hover:underline">wamda99ali@gmail.com</a>
          <a href="https://github.com/wamdaAli" target="_blank" rel="noopener noreferrer" className="hover:underline"> GitHub</a>
          <a href="https://linkedin.com/in/wamda-a-1ba729134" target="_blank" rel="noopener noreferrer" className="hover:underline"> LinkedIn</a>
        </div>

    </div>
  );
}

export default App;
