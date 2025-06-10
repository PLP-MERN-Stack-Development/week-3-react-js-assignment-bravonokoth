// src/pages/ApiTasks.jsx
import { useState } from 'react';
import { useTasksApi } from '../hooks/useTasksApi';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ApiTasks() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { tasks, loading, error, totalPages } = useTasksApi(page);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">API Task Dashboard</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {loading && <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>}
        {error && <p className="text-center text-red-500 dark:text-red-400">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}>
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Status: {task.completed ? 'Completed' : 'Active'}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="secondary"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-gray-600 dark:text-gray-300">Page {page} of {totalPages}</span>
          <Button
            variant="secondary"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
}