// src/components/LeaderboardSection.jsx
import { motion } from "framer-motion";

const contributors = [
  { id: 1, name: "Aarav Sharma", meals: 540, badge: "🥇" },
  { id: 2, name: "Priya Verma", meals: 420, badge: "🥈" },
  { id: 3, name: "Rahul Mehta", meals: 390, badge: "🥉" },
  { id: 4, name: "Sneha Patel", meals: 310 },
  { id: 5, name: "Vikram Singh", meals: 280 },
  { id: 6, name: "Neha Kapoor", meals: 250 },
];

const LeaderboardSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🌟 Top <span className="text-green-600">Contributors</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet our amazing volunteers making a real difference in reducing food waste.
        </motion.p>

        <div className="space-y-6 max-w-2xl mx-auto">
          {contributors.map((person, index) => (
            <motion.div
              key={person.id}
              className={`flex justify-between items-center p-5 rounded-2xl shadow-md backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 transition-all hover:scale-[1.02] ${
                index < 3 ? "border-2 border-green-500" : "border border-gray-300 dark:border-gray-700"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{person.badge || "👤"}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{person.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Meals Served: {person.meals}</p>
                </div>
              </div>

              <div className="text-gray-800 dark:text-white font-bold text-lg">
                #{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
