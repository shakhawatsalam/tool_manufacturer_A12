import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faTrophy, faStar } from '@fortawesome/free-solid-svg-icons'

const Business_Summary = () => {
    return (
        <div>
            <h1 className='text-6xl mt-5 text-center font-semibold'>Business Summary</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow lg:flex block mt-10">

                <div className="stat flex flex-col items-center bg-blue-300">
                    <FontAwesomeIcon className='text-5xl text-center' icon={faHandsHelping} />
                    <div className="stat-title font-semibold">We Served</div>
                    <div className="stat-value">100+</div>
                    <div className="stat-title font-semibold">Customers</div>
                </div>

                <div className="stat flex flex-col items-center bg-blue-300">
                    <FontAwesomeIcon className='text-5xl text-center' icon={faTrophy} />
                    <div className="stat-title font-semibold">Earnings</div>
                    <div className="stat-value">200M</div>
                    <div className="stat-title font-semibold">Annual Revenue</div>
                </div>

                <div className="stat flex flex-col items-center bg-blue-300">
                    <FontAwesomeIcon className='text-5xl text-center' icon={faStar} />
                    <div className="stat-title font-semibold">Customers</div>
                    <div className="stat-value">33k+</div>
                    <div className="stat-title font-semibold">Reviews</div>
                </div>

            </div>
        </div>
    );
};

export default Business_Summary;