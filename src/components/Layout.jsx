// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f9fafb', // bg-gray-50
        color: '#1f2937', // text-gray-800
        transition: 'background-color 0.3s, color 0.3s',
      }}
      className="dark:bg-gray-900 dark:text-gray-200"
    >
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <aside
          style={{
            width: '16rem', // w-64
            backgroundColor: '#ffffff', // bg-white
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // shadow-xl
            padding: '1.5rem', // p-6
            display: 'none', // hidden
            position: 'fixed',
            height: '100%',
            overflowY: 'auto',
          }}
          className="md:block dark:bg-gray-800"
        >
          <nav style={{ marginTop: '0.5rem' /* space-y-2 */ }}>
            <a
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem', // px-4 py-3
                color: '#374151', // text-gray-700
                borderRadius: '0.5rem', // rounded-lg
                transition: 'background-color 0.3s, color 0.3s',
              }}
              className="dark:text-gray-200 hover:bg-primary hover:text-white"
            >
              <svg
                style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem' }} // w-5 h-5 mr-3
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14V9h2v5H9zm0-7V5h2v2H9z" />
              </svg>
              Home
            </a>
            <a
              href="/tasks"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                color: '#374151',
                borderRadius: '0.5rem',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              className="dark:text-gray-200 hover:bg-primary hover:text-white"
            >
              <svg
                style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2 0v12h10V4H5zm3 3h4a1 1 0 110 2H8a1 1 0 110-2zm0 4h4a1 1 0 110 2H8a1 1 0 110-2z" />
              </svg>
              Tasks
            </a>
            <a
              href="/api-tasks"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                color: '#374151',
                borderRadius: '0.5rem',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              className="dark:text-gray-200 hover:bg-primary hover:text-white"
            >
              <svg
                style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7 3a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H7zm0 2h6v10H7V5zm2 2h2v2H9V7zm0 4h2v2H9v-2z" />
              </svg>
              API Tasks
            </a>
          </nav>
        </aside>
        <main
          style={{ flex: 1, padding: '1.5rem' /* p-6 */ }}
          className="md:ml-64"
        >
          <div style={{ maxWidth: '80rem', margin: '0 auto' /* max-w-7xl mx-auto */ }}>
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}