import { useEffect, useState } from "react";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import CourseCard from "./components/CourseCard";
import AddCourse from "./components/AddCourse";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [courses, setCourses] = useState(() => {
     const savedCourses = localStorage.getItem("courses");
     return savedCourses
      ? JSON.parse(savedCourses)
      : [
          { id: 1, name: "React Basics", progress: 70 },
          { id: 2, name: "JavaScript", progress: 100 },
          { id: 3, name: "HTML/CSS", progress: 80 },
          {id: 4, name: "Node.js", progress: 65},
        ];
         });

  // ✅ SAVE COURSES
   useEffect(() => {
     localStorage.setItem("courses", JSON.stringify(courses));
   }, [courses]);
   useEffect(() => {
  const handleStorageChange = (event) => {
    if (event.key === "courses") {
      const updatedCourses = JSON.parse(event.newValue);
      setCourses(updatedCourses || []);
    }
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}, []);

   // ✅ ADD COURSE
   const addCourse = (name) => {
     setCourses((prev) => [
       ...prev,
       { id: Date.now(), name, progress: 0 },
     ]);
   };

   // ✅ UPDATE PROGRESS (THIS WAS MISSING)
   const updateProgress = (id, value) => {
     setCourses((prev) =>
       prev.map((course) =>
         course.id === id
           ? { ...course, progress: Number(value) }
          : course
      )
    );
  };

   // ✅ DELETE COURSE
   const deleteCourse = (id) => {
     setCourses((prev) => prev.filter((course) => course.id !== id));
   };

 const editCourse = (id, newName) => {
   setCourses((prev) =>
     prev.map((course) =>
       course.id === id
         ? { ...course, name: newName }
         : course
     )
   );
 };
   const completed = courses.filter((c) => c.progress === 100).length;
   const inProgress = courses.length - completed;

   return (



     <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
         
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

         <AddCourse addCourse={addCourse} />

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
           <StatsCard title="Courses" value={courses.length} />
           <StatsCard title="Completed" value={completed} />
           <StatsCard title="In Progress" value={inProgress} />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              updateProgress={updateProgress}
              deleteCourse={deleteCourse}
              editCourse={editCourse}
            />
          ))}
        </div>
      </div>
    </div>
  );
 }

 export default App;

