document.body.classList.add('dark')

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource-variable/inter"

import "./index.css"
import App from "./App.jsx"
import { ThemeProvider } from "@/components/theme-provider.jsx"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
