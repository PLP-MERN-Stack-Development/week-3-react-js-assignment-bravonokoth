// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
        <div className="space-x-2 mt-2">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}