import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-sm px-4 py-20 bg-white dark:bg-primary transition-colors">
      {/* 404 Header - Adjusted gradient for visibility on white bg */}
      <h1 className="text-6xl md:text-8xl font-black bg-linear-to-r from-gray-900 via-gray-600 to-gray-400 dark:from-white dark:to-gray-500 bg-clip-text text-transparent animate-pulse">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-2">
        Page Not Found
      </h2>

      {/* Decorative Divider */}
      <div className="h-px w-64 md:w-80 rounded bg-linear-to-r from-rose-500 via-gray-400 to-transparent my-6 md:my-8"></div>
      
      <p className="md:text-lg text-gray-500 dark:text-gray-400 max-w-md text-center leading-relaxed">
        The page you are looking for has moved or does not exist. 
        Please verify the URL or return to our homepage.
      </p>

      {/* Button - Using Link instead of <a> for better routing */}
      <Link 
        to="/"
        className="group flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-3 text-white dark:text-gray-900 rounded-full mt-10 font-bold active:scale-95 transition-all shadow-lg"
      >
        Back to Home
        <svg
          className="group-hover:translate-x-1 transition-transform"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default NotFound;
