import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  deleteTask,
  toggleTaskStatus,
  updateTask,
} from "../features/tasks/taskSlice"
import { FaEdit, FaCheck, FaUndo, FaTrash } from "react-icons/fa"

function TaskItem({ task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)

  const handleSave = () => {
    if (title.trim()) {
      dispatch(updateTask({ ...task, title }))
      setIsEditing(false)
    }
  }

  return (
    <div
      className="flex justify-between items-center p-5
      border border-gray-700 rounded-xl
      bg-white dark:bg-gray-800
      shadow-md hover:shadow-xl
      transition-all duration-300
      hover:scale-[1.01]"
    >
      {/* LEFT SIDE */}
      <div>
        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 dark:border-gray-600
            px-3 py-2 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500
            bg-transparent text-gray-900 dark:text-gray-100
    placeholder-gray-400 dark:placeholder-gray-500"
          />
        ) : (
          <p
            className={`font-medium ${
                task.completed
      ? "line-through text-gray-400 dark:text-gray-500"
      : "text-gray-900 dark:text-gray-100"
            }`}
          >
            {task.title}
          </p>
        )}

        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full
          ${
            task.completed
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700
            text-white px-4 py-2 rounded-lg
            transition"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600
              p-2 rounded-lg text-white transition"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => dispatch(toggleTaskStatus(task.id))}
              className="bg-green-500 hover:bg-green-600
              p-2 rounded-lg text-white transition"
            >
              {task.completed ? <FaUndo /> : <FaCheck />}
            </button>

            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 hover:bg-red-600
              p-2 rounded-lg text-white transition"
            >
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskItem
