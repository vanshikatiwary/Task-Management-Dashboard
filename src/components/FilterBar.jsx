import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../features/tasks/taskSlice"

function FilterBar() {
  const dispatch = useDispatch()
  const currentFilter = useSelector((state) => state.tasks.filter)

  const filters = ["all", "completed", "pending"]

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(setFilter(filter))}
          className={`px-4 py-2 rounded-md text-sm capitalize ${
            currentFilter === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
