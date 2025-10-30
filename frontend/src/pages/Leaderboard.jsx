import { motion } from "framer-motion";
import { Crown, Medal } from "lucide-react";

const contributors = [
  {
    name: "Adarsh Singh",
    points: 1280,
    rank: 1,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    points: 1140,
    rank: 2,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Kumar",
    points: 1080,
    rank: 3,
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Aditi Sharma",
    points: 940,
    rank: 4,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Rahul Verma",
    points: 860,
    rank: 5,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Leaderboard = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 px-6 md:px-16 text-gray-800 dark:text-gray-100">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Leaderboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Celebrating our amazing contributors who make a real-world impact every day.
        </motion.p>
      </div>

      {/* Top 3 Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        {contributors.slice(0, 3).map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center w-64 ${
              person.rank === 1 ? "scale-110 border-2 border-yellow-400" : ""
            }`}
          >
            {person.rank === 1 && (
              <Crown className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-yellow-400 w-10 h-10" />
            )}
            <img
              src={person.avatar}
              alt={person.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
            />
            <h3 className="text-2xl font-semibold">{person.name}</h3>
            <p className="text-indigo-600 font-bold text-lg mt-1">{person.points} pts</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Rank #{person.rank}</p>
          </motion.div>
        ))}
      </div>

      {/* Remaining Contributors List */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-4 px-6">Rank</th>
              <th className="py-4 px-6">Contributor</th>
              <th className="py-4 px-6">Points</th>
              <th className="py-4 px-6 text-center">Badge</th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((person, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="py-4 px-6 font-bold text-indigo-600">#{person.rank}</td>
                <td className="py-4 px-6 flex items-center gap-4">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{person.name}</span>
                </td>
                <td className="py-4 px-6">{person.points}</td>
                <td className="py-4 px-6 text-center">
                  {person.rank <= 3 ? (
                    <Medal
                      className={`inline-block ${
                        person.rank === 1
                          ? "text-yellow-400"
                          : person.rank === 2
                          ? "text-gray-300"
                          : "text-orange-400"
                      }`}
                    />
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">—</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
