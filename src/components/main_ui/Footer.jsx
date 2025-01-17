import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                <li><a href="/PrivacyPolicy" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="/TermsConditions" className="hover:text-gray-400">Terms & Conditions</a></li>
                </ul>
            </div>


            <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <p className="mb-4">Email: contact@shopnow.com</p>
                <p className="mb-4">Phone: +1 (123) 456-7890</p>
                <p>Address: 123 ShopNow Street, City, Country</p>
            </div>


            <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                <FaLinkedin />
                </a>
            </div>
            </div>

            <div className="text-center mt-8">
            <p className="text-sm">
                &copy; 2024 ShopNow. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
