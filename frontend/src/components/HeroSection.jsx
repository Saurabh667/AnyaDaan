// src/components/HeroSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [location, setLocation] = useState("");

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1526401485004-2aa7e4e0a8f3?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Together, Let’s <span className="text-green-400">End Food Waste</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Donate excess food to people in need. Every small act can make a big difference.
        </p>

        {/* Search / Location Input */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-3 text-gray-800 flex-1 outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 px-5 flex items-center justify-center text-white">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-lg font-semibold transition-all">
            Contribute Now
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full text-lg font-semibold transition-all">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
