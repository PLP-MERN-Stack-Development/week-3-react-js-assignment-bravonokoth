import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from '../components/Button';
import Card from '../components/Card';
import React from 'react';

export default function ApiTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Tasks</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
        </div>
        {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-500 dark:text-red-400">Error: {error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <Card
              key={task.id}
              task={{
                id: task.id.toString(),
                title: task.title,
                description: '',
                status: task.completed ? 'completed' : 'todo',
                priority: 'medium',
                dueDate: 'N/A',
                daysLeft: 0,
                assignee: { initials: 'NA' },
                tags: ['API'],
              }}
              onStatusChange={() => {}}
            />
          ))}
        </div>
        {filteredTasks.length === 0 && !loading && !error && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6">No tasks found.</p>
        )}
        <div className="flex justify-between mt-6">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}