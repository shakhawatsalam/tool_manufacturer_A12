import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faTrophy, faStar } from '@fortawesome/free-solid-svg-icons'

const Business_Summary = () => {
    return (
        <div>
            <h1 className='text-6xl mt-5 text-center font-semibold'>Business Summary</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow lg:flex block mt-10">

                <div class="stat flex flex-col items-center bg-blue-300">
                    <FontAwesomeIcon className='text-5xl text-center' icon={faHandsHelping} />
                    <div class="stat-title font-semibold">We Served</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-title font-semibold">Customers</div>
                </div>

                <div class="stat flex flex-col items-center bg-blue-300">
                <FontAwesomeIcon className='text-5xl text-center' icon={faTrophy} />
                    <div class="stat-title font-semibold">Earnings</div>
                    <div class="stat-value">200M</div>
                    <div class="stat-title font-semibold">Annual Revenue</div>
                </div>

                <div class="stat flex flex-col items-center bg-blue-300">
                <FontAwesomeIcon className='text-5xl text-center' icon={faStar} />
                    <div class="stat-title font-semibold">Customers</div>
                    <div class="stat-value">33k+</div>
                    <div class="stat-title font-semibold">Reviews</div>
                </div>

            </div>
        </div>
    );
};

export default Business_Summary;