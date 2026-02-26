import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar className="hidden md:block"/>
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 w-full">
        <Navbar />
        <Content />
      </div>

    </div>
  )
}

export default App
