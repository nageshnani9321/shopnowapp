import React from 'react';
import profile from '../../assets/profile.jpg'
const UserInfo = ({userInfo}) => {
    return (
        <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Profile Section */}
            <div className="col-span-1 bg-white rounded-lg shadow-lg p-6 text-center">
            <img
                alt="User Profile"
                className="w-32 h-32 object-cover rounded-full mb-4 mx-auto border-2 border-purple-600"
                src={profile} 
            />
            <h4 className="text-2xl font-semibold text-gray-800">{userInfo.username}</h4>
            <p className="text-sm text-gray-600 mb-4">{userInfo.email}</p>
            {/* <button
                className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 focus:outline-none"
            >
                Edit Profile
            </button> */}
            </div>

            {/* Account Overview Section */}
            <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="bg-purple-600 text-white p-4 rounded-t-lg">
                <h5 className="text-xl font-semibold">Account Overview</h5>
            </div>
            <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                    <p><strong>Full Name:</strong> {`${userInfo.first_name} ${userInfo.last_name}`}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone:</strong> +91 {userInfo.phone}</p>
                </div>
                <div>
                    <p><strong>Username:</strong> {userInfo.username}</p>
                    <p><strong>City:</strong> {userInfo.city}</p>
                    <p><strong>Country:</strong> {userInfo.state}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default UserInfo;
