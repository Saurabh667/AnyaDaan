// src/components/HowItWorks.jsx
import { motion } from "framer-motion";
import { Truck, Heart, Utensils, Users } from "lucide-react";

const steps = [
  {
    icon: <Utensils className="w-12 h-12 text-green-500" />,
    title: "Collect Surplus Food",
    description: "We collaborate with restaurants, events, and individuals to collect surplus food safely.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Connect with NGOs",
    description: "Our network of verified NGOs helps ensure the food reaches people in need quickly.",
  },
  {
    icon: <Truck className="w-12 h-12 text-yellow-500" />,
    title: "Deliver with Care",
    description: "Food is transported in hygienic conditions by volunteers and delivery partners.",
  },
  {
    icon: <Heart className="w-12 h-12 text-red-500" />,
    title: "Reduce Hunger",
    description: "Every contribution helps reduce food waste and feed someone in need.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How It <span className="text-green-500">Works</span>
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Simple steps to make a big difference in reducing food waste and helping communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
