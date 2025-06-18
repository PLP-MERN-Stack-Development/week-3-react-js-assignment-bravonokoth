import React from 'react'; // Add this import
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Layout from './components/Layout';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';
import ApiTasks from './pages/ApiTasks';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api-tasks" element={<ApiTasks />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}