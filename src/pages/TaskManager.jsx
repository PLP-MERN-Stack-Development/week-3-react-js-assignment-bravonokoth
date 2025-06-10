// src/pages/TaskManager.jsx
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className="p-4">
      <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Task Dashboard</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <Button type="submit" variant="primary" className="px-6 py-2">
              Add Task
            </Button>
          </div>
        </form>
        <div className="flex gap-2 mb-4">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter('active')}
          >
            Active
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter('completed')}
          >
            Completed
          </Button>
        </div>
        <ul className="space-y-4">
          {filteredTasks.length === 0 ? (
            <li className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks found</li>
          ) : (
            filteredTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}>
                    {task.text}
                  </span>
                </div>
                <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)} aria-label="Delete task">
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>{tasks.filter((task) => !task.completed).length} tasks remaining</p>
        </div>
      </Card>
    </div>
  );
};

export default TaskManager;