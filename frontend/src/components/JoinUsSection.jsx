// src/components/JoinUsSection.jsx
import { motion } from "framer-motion";

const JoinUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join Our Mission to <span className="underline decoration-white/40">End Food Waste</span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Every meal you save brings hope to someone in need. Become part of our growing community of changemakers today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-green-50 transition-all shadow-lg">
            Sign Up Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all shadow-lg">
            Donate Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
