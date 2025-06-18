import { useState } from 'react';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTask,
          description: '',
          status: 'todo',
          priority: 'medium',
          dueDate: 'Dec 31, 2025',
          daysLeft: 10,
          assignee: { initials: 'NA' },
          tags: ['Task'],
        },
      ]);
      setNewTask('');
    }
  };

  const handleStatusChange = (taskId, status) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (filter === 'all' || task.status === filter) &&
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Task Manager</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center space-x-2 flex-1">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                setFilter(
                  filter === 'all'
                    ? 'completed'
                    : filter === 'completed'
                    ? 'in-progress'
                    : filter === 'in-progress'
                    ? 'todo'
                    : 'all'
                )
              }
            >
              <FiFilter className="h-4 w-4 mr-1" />
              {filter === 'all' ? 'All' : filter.replace('-', ' ')}
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="New task..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button variant="primary" size="sm" onClick={addTask}>
              <FiPlus className="h-4 w-4 mr-1" />
              Add Task
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <div key={task.id} className="relative group">
              <Card task={task} onStatusChange={handleStatusChange} />
              <Button
                variant="danger"
                size="sm"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 6h8v10a2 2 0 01-2 2H8a2 2 0 01-2-2V6zm2-2a1 1 0 00-1 1H5a1 1 0 00-1 1v1h12V6a1 1 0 00-1-1h-2a1 1 0 00-1-1H8z" />
                </svg>
              </Button>
            </div>
          ))}
        </div>
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6">No tasks found.</p>
        )}
      </div>
    </div>
  );
}