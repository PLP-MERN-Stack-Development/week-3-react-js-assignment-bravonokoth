// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <div className="flex space-x-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-200 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `hover:text-gray-200 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/api-tasks"
            className={({ isActive }) =>
              `hover:text-gray-200 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            API Tasks
          </NavLink>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}