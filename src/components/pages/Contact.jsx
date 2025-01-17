import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <motion.h2
        className="text-2xl font-semibold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-lg font-medium">Email: <span className="text-gray-700">contact@shopnow.com</span></p>
        <p className="text-lg font-medium">Phone: <span className="text-gray-700">+1 (123) 456-7890</span></p>
        <p className="text-lg font-medium">Address: <span className="text-gray-700">123 ShopNow Street, City, Country</span></p>
      </motion.div>

      <motion.form
        className="space-y-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
