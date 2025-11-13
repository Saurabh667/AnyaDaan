// src/components/ContributeSection.jsx
import { motion } from "framer-motion";

const ContributeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80"
            alt="Donate Food"
            className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Be the Change, <span className="text-green-600">Contribute Today</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Your small act of kindness can feed a hungry person. Join our movement to reduce food waste and share happiness with those in need.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all">
              Donate Food
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition-all">
              Become a Volunteer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributeSection;
