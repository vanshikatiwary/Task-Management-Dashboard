import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../features/tasks/taskSlice"

function SearchBar() {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.tasks.search)

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
      className="w-full px-4 py-2 rounded-lg
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    placeholder-gray-400 dark:placeholder-gray-500
    border border-gray-300 dark:border-gray-700"
    />
  )
}

export default SearchBar
