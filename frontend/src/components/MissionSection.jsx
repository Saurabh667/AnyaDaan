import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
            alt="Helping hands"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            At <span className="font-semibold text-indigo-600">AnyaDaan</span>,
            our mission is to bridge the gap between surplus and scarcity.
            We empower communities by connecting food donors with
            organizations that serve those in need.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Through technology, compassion, and collaboration, we aim to
            reduce food waste and ensure every meal reaches the right plate.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
