import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Workouts from "./pages/Workouts"
import Exercises from "./pages/Exercises"
import Progress from "./pages/Progress"
import Programs from "./pages/Programs"

export default function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar placeholder — replaced Day 3 */}
      <div className="w-56 bg-card border-r border-border" />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </main>
    </div>
  )
}


