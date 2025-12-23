import { useSelector } from "react-redux"
import TaskItem from "./TaskItem"

function TaskList() {
  const { list, filter, search } = useSelector(
    (state) => state.tasks
  )

  const filteredTasks = list
    .filter((task) => {
      if (filter === "completed") return task.completed
      if (filter === "pending") return !task.completed
      return true
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )

  if (filteredTasks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No tasks found.
      </p>
    )
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
