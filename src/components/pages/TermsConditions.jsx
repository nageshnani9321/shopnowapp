import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
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
            Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
            Please read these Terms and Conditions carefully before using our
            website.
            </p>
        </motion.div>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            1. Introduction
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            These terms and conditions govern your use of our website and
            services. By accessing or using our website, you agree to comply with
            these terms. If you do not agree with these terms, please refrain from
            using our site.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            2. Use of Website
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            You agree to use this website for lawful purposes only and in a manner
            consistent with the laws of your country. You will not engage in
            activities that could damage, disable, or interfere with the operation
            of the website or services.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            3. Privacy and Data Collection
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We are committed to protecting your privacy. Please review our Privacy
            Policy to understand how we collect, use, and safeguard your
            information when you use our website.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            4. Intellectual Property
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            All content on this website, including text, images, logos, and
            trademarks, is the property of our company or its affiliates. You may
            not use, copy, or reproduce any content without explicit permission
            from the owner.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            5. Limitation of Liability
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            Our company is not liable for any damages arising from the use or
            inability to use the website or services. We do not guarantee the
            accuracy or completeness of the information provided on the website.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            6. Termination
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We reserve the right to suspend or terminate your access to our
            website at any time, without notice, if we believe that you have
            violated these terms or engaged in illegal or inappropriate conduct.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            7. Governing Law
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            These terms and conditions will be governed by and construed in
            accordance with the laws of your jurisdiction. Any disputes related to
            these terms will be resolved in the appropriate courts.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-left bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
            8. Changes to Terms
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
            We may update or modify these terms at any time. All changes will be
            posted on this page, and you are encouraged to review this page
            periodically to stay informed about the terms that apply to your use
            of the website.
            </p>
        </motion.section>

        <motion.section
            className="mt-12 w-full max-w-4xl text-center bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <p className="text-lg text-gray-600">
            By using our website, you agree to these Terms & Conditions. If you do
            not agree, please do not use the site. If you have any questions, feel
            free to contact us at{" "}
            <a href="mailto:support@shopnow.com" className="text-blue-500">
                support@shopnow.com
            </a>
            .
            </p>
        </motion.section>
        </div>
    );
};

export default TermsConditions;
