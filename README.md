## 🗂️ Task Management Dashboard ##

A modern, responsive Task Management Dashboard built using React.js, Redux Toolkit, and Tailwind CSS, featuring task creation, editing, filtering, search, dark/light mode, and component testing with React Testing Library + Vitest.

## 🚀 Features 

➕ Add, edit, delete tasks

✅ Mark tasks as completed / pending

🔍 Search tasks in real-time

🎯 Filter tasks (All / Completed / Pending)

🌙 Dark Mode / ☀️ Light Mode toggle

📱 Fully responsive (mobile-first UI)

🧪 Unit testing using React Testing Library

⚡ Fast build setup with Vite

🛠️ Tech Stack
Frontend

React.js (Functional Components + Hooks)

Redux Toolkit (Global State Management)

Tailwind CSS (Utility-first styling)

React Icons

Testing

Vitest

React Testing Library

@testing-library/jest-dom

Tooling

Vite

Git

GitHub

📂 Project Structure

task-dashboard/
│
├── src/
│   ├── app/              # Redux store
│   ├── components/       # Reusable UI components
│   ├── features/         # Redux slices
│   ├── pages/            # Pages (Dashboard)
│   ├── _tests_/          # Component tests
│   ├── test/             # Test setup
│   └── main.jsx
│
├── .github/workflows/    # CI (optional)
├── public/
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


⚙️ Setup Instructions
1️⃣ Clone the Repository

git clone https://github.com/<your-username>/task-dashboard.git
cd task-dashboard

2️⃣ Install Dependencies

npm install

3️⃣ Run the Development Server

npm run dev

📍 App will run at:

http://localhost:5173

🎨 Tailwind CSS Setup (Already Configured)

Tailwind CSS is already integrated using:

tailwind.config.js

postcss.config.js

Tailwind directives in index.css

No extra setup required.

🧪 Running Tests

This project includes component testing using React Testing Library.

Run tests in watch mode
npm test

Run tests once
npx vitest run


✔️ Example tested component:

Dashboard heading render test

🧪 Sample Test Output
✓ src/_tests_/Dashboard.test.jsx (1 test)
✓ renders Task Management Dashboard heading

🌙 Dark Mode Support

Toggle available in UI

Uses Tailwind dark: variants

Automatically updates text and background colors

📱 Responsive Design

Mobile-first layout

Responsive padding, spacing, and typography

Optimized for desktop, tablet, and mobile screens

📌 Technical Requirements Fulfilled

✔️ React.js
✔️ Redux Toolkit
✔️ Tailwind CSS
✔️ Modern React (Hooks & Functional Components)
✔️ Responsive UI
✔️ Component Testing

📦 Build for Production
npm run build


Build output will be generated in the dist/ folder.

🔗 Future Improvements

Persistent storage (LocalStorage / Backend)

Drag-and-drop task ordering

More test coverage

Animations using Framer Motion
