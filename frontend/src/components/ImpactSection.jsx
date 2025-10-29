// src/components/ImpactSection.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Utensils, HandHeart } from "lucide-react";

const stats = [
  {
    icon: <Utensils className="w-10 h-10 text-green-500" />,
    label: "Meals Served",
    value: 125000,
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    label: "Volunteers",
    value: 8500,
  },
  {
    icon: <MapPin className="w-10 h-10 text-yellow-500" />,
    label: "Cities Covered",
    value: 45,
  },
  {
    icon: <HandHeart className="w-10 h-10 text-red-500" />,
    label: "NGOs Partnered",
    value: 320,
  },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const duration = 2000; // 2 sec
    const incrementTime = 20;
    const step = (end - start) / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const ImpactSection = () => {
  return (
    <section className="py-20 bg-green-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-green-600">Impact</span>
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Every number here represents a life touched, a meal served, and a positive change created.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                <Counter target={stat.value} />+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
