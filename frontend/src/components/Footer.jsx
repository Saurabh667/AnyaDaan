// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 relative overflow-hidden">
      {/* Floating light circles */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-52 h-52 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-12">
        {/* Column 1 - Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">AnyaDaan</h2>
          <p className="text-gray-400 leading-relaxed">
            Connecting communities to reduce food waste and feed the needy.  
            Together, we can make a difference one meal at a time 🍲
          </p>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "About", "Contribute", "Leaderboard", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Column 3 - Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex gap-5">
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} <span className="text-green-400">AnyaDaan</span> — All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
