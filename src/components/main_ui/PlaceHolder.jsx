import React from 'react';

const PlaceHolder = () => {
    return (
        <div className="col-md-3 mb-5">
        <div className="card" aria-hidden="true">
            <div className="h-[180px] bg-gray-700"></div>
            <div className="card-body">
            <p className="card-text animate-pulse bg-gray-600 h-4 rounded-md mb-2"></p>
            <span className="animate-pulse bg-gray-600 h-4 rounded-md block mb-2 w-full"></span>
            <span className="animate-pulse bg-gray-600 h-4 rounded-md block w-full"></span>
            </div>
        </div>
        </div>
    );
};

export default PlaceHolder;
