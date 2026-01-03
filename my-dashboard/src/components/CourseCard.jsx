import { useState } from "react";

function CourseCard({ course, updateProgress, deleteCourse, editCourse }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(course.name);

  const handleSave = () => {
    if (newName.trim() === "") return;
    editCourse(course.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="
      bg-gray-50 dark:bg-gray-700 dark:text-white
      p-6 rounded-2xl shadow-sm hover:shadow-md transition
      relative
    ">
      {/* Delete */}
      <button
        onClick={() => deleteCourse(course.id)}
        className="absolute top-3 right-3 text-red-500 font-bold"
      >
        ✕
      </button>

      {/* Course Name */}
      {isEditing ? (
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="
            w-full px-3 py-2 mb-3 rounded-lg
            dark:bg-gray-600 dark:text-white
          "
        />
      ) : (
        <h3 className="font-semibold text-lg mb-3">
          {course.name}
        </h3>
      )}

      {/* Buttons */}
      <div className="flex gap-2 mb-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Edit
          </button>
        )}
      </div>

      {/* Progress */}
      <input
        type="range"
        min="0"
        max="100"
        value={course.progress}
        onChange={(e) => updateProgress(course.id, e.target.value)}
        className="w-full accent-blue-500"
      />

      <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded mt-3">
        <div
          className="bg-blue-500 h-2 rounded transition-all"
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <p className="text-sm mt-3 text-gray-500 dark:text-gray-300">
        {course.progress}% completed
      </p>
    </div>
  );
}

export default CourseCard;