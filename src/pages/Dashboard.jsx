import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-sm text-zinc-400 mt-2">Track today’s workout, progress, and weekly performance.</p>
      <Link to="/workouts">goto Workouts</Link>
    </div>
  )
}
