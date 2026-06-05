import { Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <Card className="min-h-screen flex flex-col items-center justify-center text-center px-4 border border-cyan-800">

      <h1 className="text-6xl font-bold text-teal-400">404</h1>

      <p className="mt-3 text-lg text-gray-800">
        Page not found
      </p>

      <p className="text-sm text-gray-400 mt-1">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 bg-gradient-to-r from-sky-500 to-teal-400 text-black rounded-md hover:bg-blue-700 font-semibold"
      >
        Go Home
      </Link>
    </Card>
  );
};

export default NotFoundPage;