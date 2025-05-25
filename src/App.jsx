import './App.css'
function App() {
  return(
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans px-8 py-12">

      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-blue-700">Wamda Ali</h1>
        <p className="mt-2 text-x1 text-gray-700 font-medium">Computer Science Graduate | Software Engineering Entusiast</p>
        <p className="mt-1 text-gray-600">
          Passionate about building impactful solutions, solving real-world problems, and continuously learning in tech.
        </p>
        {/* Contact Section*/}
        <div className="mt-4 flex space-x-6">
          <a href="mailto:wamda99ali@gmail.com" className="text-blue-600 hover:underline">wamda99ali@gmail.com</a>
          <a href="http://github.com/wamdaAli" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black"> GitHub</a>
          <a href="http://linkedin.com/in/wamda-a-1ba729134" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black"> LinkedIn</a>
        </div>
      </header>

      {/* Technical Skills Section */}
      <section className="max-w-4x1 mx-auto mb-12">
        <h2 className="text-2x1 font-semibold text-gray-800 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-gray-700">
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
      </section>

      {/* Certifications */}
      <section className="max-w-4xl max-auto mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>AWS Fundamentals Specialization - Coursera</li>
          <li>J.P Morgan Software Engineering - Forage</li>
          <li>Accenture Coding: Development and Advanced Engineering - Forage</li>
        </ul>
      </section>

      {/* Projects Sections */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Personal Profile Website:</strong> Built with React and Tailwind CSS to showcase my skills and projects.
          </li>
          <li>
            <strong>MindLink: Mental Wellness App</strong> An accessible, full-stack Java desktop app to help users manage and improve mental wellbeing using MySQL for backend. A safe and secure platform that integrates tracking, data visualisation, journalling, and community building features.
          </li>
        </ul>
      </section>

    </div>
  );
}

export default App;
