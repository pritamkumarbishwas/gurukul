import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-slate-800 dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
