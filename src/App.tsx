import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import ThemeSwitch from "./components/ThemeSwitch"
import TodoList from "./components/TodoList"

function App() {
  useEffect(() => {
    if (!("theme" in localStorage)) {
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    } else {
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    }
  }, [])
  return (
    <main>
      <ThemeSwitch />
      <TodoList />
    </main>
  )
}

export default App
