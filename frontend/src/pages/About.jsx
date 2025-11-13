// src/pages/About.jsx
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Adarsh Singh",
    role: "Founder & Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Riya Patel",
    role: "Community Lead",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Karan Mehta",
    role: "Operations Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="underline decoration-white/40">AnyaDaan</span>
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering communities to reduce food waste and feed those in need.  
          Together, we’re building a world where no food goes to waste.
        </motion.p>
      </section>

      {/* About Text + Image */}
      <section className="py-20 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.img
          src="https://images.unsplash.com/photo-1600880292089-90e6a0b6c40e?auto=format&fit=crop&w=900&q=80"
          alt="Community help"
          className="rounded-3xl shadow-xl lg:w-1/2 hover:scale-105 transition-transform duration-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            AnyaDaan is an initiative to fight hunger by connecting people who have extra food with those who need it most.
            Our mission is to minimize food waste while making sure every meal finds a plate.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From small local drives to large community partnerships, we’re working tirelessly to create impact with compassion and technology.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-10 text-green-700 dark:text-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Mission
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Reduce Food Waste",
                desc: "We rescue surplus food from restaurants and individuals and redirect it to those in need.",
                icon: "♻️",
              },
              {
                title: "Feed Communities",
                desc: "Our volunteers deliver meals to underprivileged families across cities every day.",
                icon: "🍱",
              },
              {
                title: "Empower Change",
                desc: "We inspire communities to contribute and build a future where no one sleeps hungry.",
                icon: "💚",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-green-700 dark:text-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
