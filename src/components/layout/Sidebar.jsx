import { NavLink } from "react-router-dom"
import {
  House,
  Dumbbell,
  ListChecks,
  TrendingUp,
  BookOpen,
  Settings,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/", label: "Dashboard", icon: House },
  { to: "/workouts", label: "Workouts", icon: Dumbbell },
  { to: "/exercises", label: "Exercises", icon: ListChecks },
  { to: "/progress", label: "Progress", icon: TrendingUp },
  { to: "/programs", label: "Programs", icon: BookOpen },
]

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r-2 border-sidebar-border bg-sidebar">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 border-b border-sidebar-border p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <Dumbbell size={40} className="text-white" />
        </div>
        <span className="text-xl font-semibold text-foreground">LiftTrack</span>
      </div>
      {/* Navigation Links */}
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 rounded-lg px-3 py-2 transition-colors",
                isActive
                  ? "border-2 border-primary text-primary/80"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <link.icon size={16} />
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col gap-1 border-t border-sidebar-border p-3">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive
                ? "border border-primary text-primary/60"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )
          }
        >
          <Settings size={16} />
          Settings
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive
                ? "border border-primary text-primary/60"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )
          }
        >
          <HelpCircle size={16} />
          Help
        </NavLink>
      </div>
      <div className="border-t border-sidebar-border p-4">
        <p className="text-sm font-medium text-foreground">Omar Mauldin</p>
        <p className="text-xs text-muted-foreground">omarmauldin.com</p>
      </div>
    </aside>
  )
}
