import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information.
            </p>
        </motion.div>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Information We Collect
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We collect personal information such as your name, email address, and
            payment information when you make a purchase on our site.
            Additionally, we collect non-personal data such as browsing behavior
            and device information to improve your shopping experience.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            How We Use Your Information
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We use the information we collect to process your orders, provide
            customer support, and improve your experience on our website. We may
            also use your email to send you promotional offers, but you can
            opt-out at any time.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Data Security</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We take the security of your data seriously. We use industry-standard
            encryption to protect your personal and payment information. Your data
            will never be shared with third parties without your consent, except
            as necessary to fulfill your orders.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Rights</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            You have the right to access, correct, and delete the personal
            information we hold about you. If you wish to exercise any of these
            rights, please contact us using the information provided below.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Cookies</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We use cookies to enhance your experience on our site. Cookies help us
            remember your preferences and ensure that the site functions smoothly.
            You can manage your cookie settings in your browser settings.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            If you have any questions about this Privacy Policy, or if you'd like
            to exercise any of your rights, please contact us at{" "}
            <a href="mailto:support@shopnow.com" className="text-blue-500">
                support@shopnow.com
            </a>
            .
            </p>
        </motion.section>
        </div>
    );
};

export default PrivacyPolicy;
