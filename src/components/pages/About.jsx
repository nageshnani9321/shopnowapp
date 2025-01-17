import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        className="text-center bg-gradient-to-r from-gray-200 to-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to ShopNow
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop online shop for all things you need. Browse, shop, and
          enjoy!
        </p>
      </motion.div>

      <motion.section
        className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          At ShopNow, our mission is to provide you with a seamless shopping
          experience. We carefully select high-quality products from various
          categories and offer them at competitive prices. Our goal is to ensure
          that every customer walks away with a smile.
        </p>
      </motion.section>

      <motion.section
        className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <motion.div
            className="bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-600">
              We offer only the best products, ensuring every item is top-notch
              and reliable.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, and we strive to provide
              excellent service every step of the way.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We believe in staying ahead of trends and continuously improving
              our offerings to meet your needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Story</h2>
        <p className="text-lg text-gray-500 leading-relaxed px-4">
          ShopNow was founded with a simple vision: to make online shopping
          easy, affordable, and fun. Over the years, we've expanded our product
          range to include everything from electronics to fashion, and we
          continue to grow. Our passion for quality and customer satisfaction
          drives every decision we make.
        </p>
      </motion.section>

      <motion.section
        className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <motion.div
            className="bg-gradient-to-r from-blue-200 to-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/forwardthinking-indian-businessman_713888-20571.jpg?w=740"
              alt="Team Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ram</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-200 to-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/professional-male-entrepreneur-hd-8k-wallpaper-stock-photographic-image_1033957-28550.jpg?w=740"
              alt="Team Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nandha</h3>
            <p className="text-gray-600">COO</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-200 to-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/photo-portrait-night-with-arms-crossed_1077802-152861.jpg?w=740"
              alt="Team Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Padhma leela
            </h3>
            <p className="text-gray-600">Head of Marketing</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 w-full max-w-6xl text-center px-6 py-16 bg-gradient-to-r from-gray-100 to-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="space-y-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:space-y-0">
          {/* Testimonial 1 */}
          <motion.div
            className="bg-gradient-to-r from-gray-400 to-white shadow-xl rounded-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/free-photo/front-view-smiley-man-with-sunglasses-city_23-2148682678.jpg?t=st=1736173291~exp=1736176891~hmac=82a2181205da0eeb91dd40699449697509ce3eb51edbb0d6891dac78d22a8775&w=740"
              alt="Customer 1"
              className="w-20 h-20 mx-auto rounded-full mb-6 shadow-lg"
            />
            <p className="text-lg text-gray-600 italic mb-4">
              "ShopNow has been a game-changer for me! The shopping experience
              is seamless, and the customer service is top-notch!"
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-800">
              Michael Scott
            </p>
            <p className="text-sm text-gray-500">Satisfied Customer</p>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-gradient-to-r from-gray-400 to-white shadow-xl rounded-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/hd-digital-art-wallpaper-background_783884-143549.jpg?w=740"
              alt="Customer 2"
              className="w-20 h-20 mx-auto rounded-full mb-6 shadow-lg"
            />
            <p className="text-lg text-gray-600 italic mb-4">
              "I love how easy it is to find what I need. ShopNow always
              delivers, and I will definitely shop again!"
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-800">Sam</p>
            <p className="text-sm text-gray-500">Happy Shopper</p>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="bg-gradient-to-r from-gray-400 to-white shadow-xl rounded-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/woman-white-shirt-is-standing-street_788415-7413.jpg?w=740"
              alt="Customer 3"
              className="w-20 h-20 mx-auto rounded-full mb-6 shadow-lg"
            />
            <p className="text-lg text-gray-600 italic mb-4">
              "ShopNow made my shopping experience super easy, and I found
              everything I was looking for. I'll be back for sure!"
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-800">
              Sara
            </p>
            <p className="text-sm text-gray-500">Loyal Customer</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-600">
          Ready to start shopping? Visit our{" "}
          <a href="/" className="text-blue-500">
            store
          </a>{" "}
          and find amazing deals!
        </p>
      </motion.section>
    </div>
  );
};

export default About;
