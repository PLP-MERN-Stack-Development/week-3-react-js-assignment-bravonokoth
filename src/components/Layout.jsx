// src/components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4 hidden md:block">
          <nav className="space-y-4">
            <a href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Home</a>
            <a href="/tasks" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Tasks</a>
            <a href="/api-tasks" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">API Tasks</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">{children}</div> {/* Limited width with allowance */}
        </main>
      </div>
      <Footer />
    </div>
  );
}