// src/api/taskApi.js
export const fetchTasks = async (page = 1, limit = 10) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};