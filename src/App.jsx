import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Workouts from "./pages/Workouts"
import Exercises from "./pages/Exercises"
import Progress from "./pages/Progress"
import Programs from "./pages/Programs"
import Gallery from "./pages/Gallery"
import Sidebar from "./components/layout/Sidebar.jsx"

export default function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      </div>
    
  )
}


