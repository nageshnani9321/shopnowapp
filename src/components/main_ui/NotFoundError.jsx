import React from 'react';

const NotFoundError = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
        <div className="text-center">
            <img
            src="https://img.freepik.com/premium-vector/404-error-page-template-website-sorry-page-found-banner-design-with-different-geometric-element-modern-vector-illustration_172533-2615.jpg?w=1060"
            alt="404 Error"
            className="w-full max-w-lg mx-auto mb-6"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Sorry, we couldn't find the page you were looking for.
            </p>
            <a
            href="/"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
            Go Back to Home
            </a>
        </div>
        </div>
    );
};

export default NotFoundError;
