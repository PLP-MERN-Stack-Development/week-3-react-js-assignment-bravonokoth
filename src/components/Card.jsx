import React from 'react';
import { FiCalendar, FiClock, FiFlag, FiCheckCircle } from 'react-icons/fi';

const Card = ({ task, onStatusChange, className = '' }) => {
  return (
    <div
      className={`task-card status-${task.status} priority-${task.priority} ${className} group animate-fade-in transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <button
            className="p-0 h-6 w-6 rounded-full hover:bg-green-100 dark:hover:bg-green-900"
            onClick={() => onStatusChange(task.id, task.status === 'completed' ? 'todo' : 'completed')}
            aria-label={task.status === 'completed' ? 'Mark as incomplete' : 'Mark as complete'}
          >
            <FiCheckCircle
              className={`h-5 w-5 transition-colors ${
                task.status === 'completed' ? 'text-green-600' : 'text-gray-400'
              }`}
            />
          </button>
          <div className="flex-1 min-w-0">
            <h3
              className={`font-semibold text-gray-900 dark:text-gray-100 leading-tight ${
                task.status === 'completed' ? 'line-through text-gray-500 dark:text-gray-400' : ''
              }`}
            >
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{task.description}</p>
          </div>
        </div>
        <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="More options">
          <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
      <div className="space-y-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex flex-wrap gap-1">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`px-2 py-1 rounded-full text-xs flex items-center ${
              task.priority === 'high'
                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                : task.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}
          >
            <FiFlag className="h-3 w-3 mr-1" />
            {task.priority}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : task.status === 'in-progress'
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
            }`}
          >
            {task.status.replace('-', ' ')}
          </span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <FiCalendar className="h-3 w-3" />
              <span>{task.dueDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiClock className="h-3 w-3" />
              <span>{task.daysLeft} days left</span>
            </div>
          </div>
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-800 dark:text-gray-200">
            {task.assignee.initials}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;