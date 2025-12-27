import { useState } from "react";

function AddCourse({ addCourse }) {
  const [courseName, setCourseName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (courseName.trim() === "") return;

    addCourse(courseName);
    setCourseName("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4 dark:text-white">
        Add New Course
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="
            flex-1 px-4 py-2 rounded-xl border
            focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:bg-gray-700 dark:text-white
          "
        />

        <button
          type="submit"
          className="
            bg-blue-600 text-white px-4 py-2
            rounded-xl font-semibold
            hover:bg-blue-700 transition
          "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCourse;