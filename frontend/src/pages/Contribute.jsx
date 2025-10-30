import { motion } from "framer-motion";

const Contribute = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-24 px-6 md:px-16 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Make a Difference — Contribute Today
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto mb-8"
        >
          Your contribution helps us feed families, reduce waste, and build a more compassionate world.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contribute-form"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Start Contributing
        </motion.a>
      </section>

      {/* Why Contribute Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Contribute?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every contribution — big or small — makes a lasting impact in someone’s life. Here's how your support helps:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Feed Families",
              desc: "Your donation provides nutritious meals to underprivileged communities.",
              img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
            },
            {
              title: "Reduce Waste",
              desc: "We ensure surplus food from events, restaurants, and homes reaches those who need it.",
              img: "https://images.unsplash.com/photo-1606755962773-0c7e4c30e9b3",
            },
            {
              title: "Empower Change",
              desc: "By contributing, you help us build a sustainable and equitable food distribution system.",
              img: "https://images.unsplash.com/photo-1603046891744-87d87e5f912d",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contribution Form */}
      <section id="contribute-form" className="bg-indigo-50 dark:bg-gray-800 py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Contribute Now</h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Contribution Type</label>
              <select
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                required
              >
                <option value="">Select an option</option>
                <option value="food">Food Donation</option>
                <option value="money">Monetary Donation</option>
                <option value="volunteer">Volunteer</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                placeholder="Write a short message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-full transition"
            >
              Submit Contribution
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
