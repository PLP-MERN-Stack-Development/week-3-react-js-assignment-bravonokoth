import { useState } from 'react';
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { FiGrid, FiList, FiSearch, FiFilter } from 'react-icons/fi';

const sampleTasks = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create a modern, responsive landing page...',
    status: 'in-progress',
    priority: 'high',
    dueDate: 'Dec 15, 2024',
    daysLeft: 2,
    assignee: { initials: 'JD' },
    tags: ['Design', 'Frontend'],
  },
  {
    id: '2',
    title: 'Implement user authentication',
    description: 'Set up secure user authentication...',
    status: 'todo',
    priority: 'high',
    dueDate: 'Dec 20, 2024',
    daysLeft: 7,
    assignee: { initials: 'SW' },
    tags: ['Backend', 'Security'],
  },
  {
    id: '3',
    title: 'Write API documentation',
    description: 'Create comprehensive documentation...',
    status: 'completed',
    priority: 'medium',
    dueDate: 'Dec 10, 2024',
    daysLeft: 0,
    assignee: { initials: 'MJ' },
    tags: ['Documentation', 'API'],
  },
  {
    id: '4',
    title: 'Mobile app testing',
    description: 'Conduct thorough testing...',
    status: 'in-progress',
    priority: 'medium',
    dueDate: 'Dec 18, 2024',
    daysLeft: 5,
    assignee: { initials: 'LC' },
    tags: ['Testing', 'Mobile'],
  },
  {
    id: '5',
    title: 'Database optimization',
    description: 'Optimize database queries...',
    status: 'todo',
    priority: 'low',
    dueDate: 'Dec 25, 2024',
    daysLeft: 12,
    assignee: { initials: 'DK' },
    tags: ['Backend', 'Performance'],
  },
  {
    id: '6',
    title: 'Deploy to production',
    description: 'Deploy the latest version...',
    status: 'todo',
    priority: 'high',
    dueDate: 'Dec 22, 2024',
    daysLeft: 9,
    assignee: { initials: 'ED' },
    tags: ['DevOps', 'Deployment'],
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleStatusChange = (taskId, status) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status } : task)));
  };

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    todo: tasks.filter((t) => t.status === 'todo').length,
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (filter === 'all' || task.status === filter) &&
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-slide-up">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Task Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-base">
              Organize and track your projects with ease
            </p>
          </div>
          <Button
            variant="primary"
            className="flex items-center space-x-2 rounded-lg shadow-glow-sm hover:shadow-glow-md transition-shadow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
            </svg>
            <span>Add New Task</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <div className="task-card flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{taskStats.total}</p>
            </div>
            <FiGrid className="h-8 w-8 text-primary" />
          </div>
          <div className="task-card flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{taskStats.completed}</p>
            </div>
            <span className="h-8 w-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">
              ✓
            </span>
          </div>
          <div className="task-card flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">In Progress</p>
              <p className="text-2xl font-bold text-primary">{taskStats.inProgress}</p>
            </div>
            <span className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              •
            </span>
          </div>
          <div className="task-card flex items-center justify-between transform hover:scale-105 transition-transform">
            <div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">To Do</p>
              <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">{taskStats.todo}</p>
            </div>
            <span className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-lg">
              ○
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 animate-fade-in">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="pl-10 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="secondary"
              size="md"
              className="flex items-center space-x-2 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
              <FiFilter className="h-5 w-5" />
              <span className="capitalize">{filter === 'all' ? 'All' : filter.replace('-', ' ')}</span>
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'secondary'}
              size="md"
              onClick={() => setViewMode('grid')}
              className="flex items-center space-x-2 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FiGrid className="h-5 w-5" />
              <span>Grid</span>
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'secondary'}
              size="md"
              onClick={() => setViewMode('list')}
              className="flex items-center space-x-2 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FiList className="h-5 w-5" />
              <span>List</span>
            </Button>
          </div>
        </div>

        {/* Tasks */}
        <div
          className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
          style={{ animationDelay: '0.2s' }}
        >
          {filteredTasks.map((task, index) => (
            <Card
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
              className={`task-card transform hover:scale-105 transition-transform animate-fade-in ${
                viewMode === 'list' ? 'flex flex-col' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">No tasks found.</p>
            <p className="text-gray-400 dark:text-gray-500 text-base mt-2">
              Try adjusting your search or create a new task.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}