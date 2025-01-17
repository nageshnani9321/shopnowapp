import React, { useState, useEffect, useContext } from 'react'
import api from '../../context/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../userContext/AuthContext'

const LoginPage = () => {
    const {setIsAuthenticated, get_username} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const userInfo = { username, password }


    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        
        api.post("token/", userInfo)
            .then(res => {
                console.log(res.data); 
                localStorage.setItem("access", res.data.access)
                localStorage.setItem("refresh", res.data.refresh)
                setUsername("")
                setPassword("")
                setLoading(false)
                setIsAuthenticated(true)
                get_username()
                setError("")

                const from = location?.state?.from.pathname || "/";
                navigate(from, {replace:true});
                
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
                setLoading(false)
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6">Please login to your account</p>

                <form onSubmit={handleSubmit}>
                    {/* Username input */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username" 
                            required 
                        />
                    </div>

                    {/* Password input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>

                    {/* Login Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        disabled={loading}
                    >
                        Login
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        <a href="#" className="text-blue-500 hover:text-blue-700">Forgot Password?</a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Don't have an account? 
                        <a href="/signup" className="text-blue-500 hover:text-blue-700"> Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
