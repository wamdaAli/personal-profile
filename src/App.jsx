import './App.css'
function App() {
  return(
    <div className="min-h-screen bg-white text-gray-800 font-sans p-6 flex flex-col items-center">

      {/* Header Section */}
      <header className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-5xl font-extabold text-blue-700 tracking-tight mb-3">Wamda Ali</h1>
        <p className="text-lg text-gray-700 font-medium">Computer Science Graduate | Software Engineering Entusiast</p>
        <p className="text-sm text-gray-500 mt-1">
          Passionate about building impactful solutions, solving real-world problems, and continuously learning in tech.
        </p>

        {/* Contact */}
        <div className="mt-5 flex justify-center space-x-4">
          <a href="mailto:wamda99ali@gmail.com" className="text-blue-600 hover:underline">wamda99ali@gmail.com</a>
          <a href="http://github.com/wamdaAli" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black"> GitHub</a>
          <a href="http://linkedin.com/in/wamda-a-1ba729134" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black"> LinkedIn</a>
        </div>
      </header>

      {/* Technical Skills */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2x1 font-semibold text-blue-600 mb-4">Technical Skills</h2>
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
      </div>

      {/* Certifications */}
      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>AWS Fundamentals Specialization - Coursera</li>
          <li>J.P Morgan Software Engineering - Forage</li>
          <li>Accenture Coding: Development and Advanced Engineering - Forage</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
