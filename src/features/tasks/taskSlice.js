import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  filter: "all",
  search: "",
}

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload)
    },

    updateTask: (state, action) => {
      const { id, title } = action.payload
      const task = state.list.find(task => task.id === id)
      if (task) {
        task.title = title
      }
    },

    deleteTask: (state, action) => {
      state.list = state.list.filter(
        task => task.id !== action.payload
      )
    },

    toggleTaskStatus: (state, action) => {
      const task = state.list.find(
        task => task.id === action.payload
      )
      if (task) {
        task.completed = !task.completed
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload
    },

    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const {
  addTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
  setFilter,
  setSearch,
} = taskSlice.actions

export default taskSlice.reducer
