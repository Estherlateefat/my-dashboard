// function StatsCard({ title, value }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 dark:text-white shadow rounded-xl p-5">
//       <p className="text-gray-500 dark:text-gray-300 text-sm">{title}</p>
//       <h2 className="text-3xl font-bold mt-2">{value}</h2>
//     </div>
//   );
// }

// export default StatsCard;
function StatsCard({ title, value }) {
  return (
    <div className="
      bg-white dark:bg-gray-800 dark:text-white
      rounded-2xl p-6 shadow
      hover:shadow-lg transition
    ">
      <p className="text-gray-500 dark:text-gray-300 text-sm">
        {title}
      </p>
      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;