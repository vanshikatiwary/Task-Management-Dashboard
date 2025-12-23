import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import FilterBar from "../components/FilterBar"
import SearchBar from "../components/SearchBar"
import ThemeToggle from "../components/ThemeToggle"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Enhanced Heading */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-extrabold
            bg-gradient-to-r from-blue-600 to-blue-700
            text-transparent bg-clip-text"
          >
            Task Management Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Organize • Track • Complete
          </p>
        </div>

        <div className="space-y-6">
          <TaskForm />
          <ThemeToggle />
          <SearchBar />
          <FilterBar />
          <TaskList />
        </div>

      </div>
    </div>
  )
}

export default Dashboard
