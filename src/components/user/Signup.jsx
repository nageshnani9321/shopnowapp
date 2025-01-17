import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Signup = () => {
    // States for form data
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/register/', {
                username,
                email,
                password,
                first_name: firstName,
                last_name: lastName,
                phone,
                city,
                address,
                state,
            });

            toast.success('User created successfully!');
            console.log('Registration successful');
            
            // Redirect to login page
            window.location.href = '/login';  
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.detail || 'Registration failed. Please try again.');
            } else {
                setError('Registration failed. Please try again.');
            }

            toast.error('Registration failed!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* First Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Last Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Phone Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* City Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Address Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* State Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Sign Up
                    </button>
                </form>

                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Signup;
