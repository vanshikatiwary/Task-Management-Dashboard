import { useEffect, useState } from "react"

function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mb-4 px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
    >
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  )
}

export default ThemeToggle
