import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'; // Ensure React import
import { useTheme } from '../context/ThemeContext.jsx'; // Already correct

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); // Use useTheme hook
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full glass p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="text-2xl font-bold text-primary">TaskFlow</span>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary">Dashboard</NavLink>
            <NavLink to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-primary">Tasks</NavLink>
            <NavLink to="/team" className="text-gray-600 dark:text-gray-300 hover:text-primary">Team</NavLink>
            <NavLink to="/calendar" className="text-gray-600 dark:text-gray-300 hover:text-primary">Calendar</NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search tasks, projects..."
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary w-64"
          />
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M4 10a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 014 10z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-primary">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a3 3 0 00-3 3v1a1 1 0 11-2 0V5a5 5 0 115 5h-1a1 1 0 110-2h1a3 3 0 003-3V5a3 3 0 00-3-3zM10 13a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200">JD</div>
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <ul className="flex flex-col space-y-2">
              <li><NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Dashboard</NavLink></li>
              <li><NavLink to="/tasks" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Tasks</NavLink></li>
              <li><NavLink to="/team" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Team</NavLink></li>
              <li><NavLink to="/calendar" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Calendar</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}