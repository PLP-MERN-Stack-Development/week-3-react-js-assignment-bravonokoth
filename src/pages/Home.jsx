// src/pages/Home.jsx
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <Card className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Overview</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Welcome to Task Manager, your hub for efficient task management.</p>
        <Link to="/tasks">
          <Button variant="primary" className="w-full mt-4">Go to Tasks</Button>
        </Link>
      </Card>
      <Card className="bg-gradient-to-br from-green-100 to-green-200 dark:from-gray-700 dark:to-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Task Stats</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Track your progress with real-time updates.</p>
        <Link to="/tasks">
          <Button variant="success" className="w-full mt-4">View Stats</Button>
        </Link>
      </Card>
      <Card className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-gray-700 dark:to-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">API Integration</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Explore tasks from external APIs.</p>
        <Link to="/api-tasks">
          <Button variant="secondary" className="w-full mt-4">View API Tasks</Button>
        </Link>
      </Card>
    </div>
  );
}