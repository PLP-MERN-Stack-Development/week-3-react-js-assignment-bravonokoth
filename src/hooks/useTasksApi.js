// src/hooks/useTasksApi.js
import { useState, useEffect } from 'react';
import { fetchTasks } from '../api/taskApi';

export function useTasksApi(page) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const data = await fetchTasks(page);
        setTasks(data);
        setTotalPages(10); // JSONPlaceholder mock
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadTasks();
  }, [page]);

  return { tasks, loading, error, totalPages };
}