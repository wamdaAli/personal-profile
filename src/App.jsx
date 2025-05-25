import './App.css'
function App() {
  return(
    <div className="min-h-screen flex flex-col items-center justifu-center bg-white text-gray-800 font-sans p-4">
      <div className="text-center">
        <h1 className="text-4x1 font-bold text-blue-600">Wamda Ali</h1>
        <p className="mt-2 text-lg text-gray-700">Computer Science, Software Engineering Graduate</p>
        <p className="mt-1 text-sm text-gray-500">Passionate about problem-solving, learning, and building things that make a difference</p>

        <div className="mt-6">
          <a href="mailto:wamda99ali@gmail.com" className="text-blue-500 underline hover:text-blue-700">wamda99ali@gmail.com</a>
        </div>

        <div className="mt-4 space-x-4">
          <a href="https://github.com/wamdaAli" className="text-gray-700 hover:text-black font-medium">GitHub</a>
          <a href="https://linkedin.com/in/wamda-a-1ba729134" className="text-gray-700 hover:text-black font-medium">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default App
