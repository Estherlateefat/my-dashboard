function Header({ darkMode, setDarkMode }) {
  return (
    <div className="
      flex flex-col sm:flex-row
      justify-between items-center
      gap-4
      bg-gradient-to-r from-blue-600 to-blue-500
      dark:from-gray-800 dark:to-gray-700
      text-white p-6 rounded-2xl shadow
    ">
      <div>
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <p className="text-sm opacity-90">
          Track your learning progress
        </p>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          bg-white text-blue-600
          px-4 py-2 rounded-xl
          font-semibold text-sm
          hover:bg-gray-100 transition
        "
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;