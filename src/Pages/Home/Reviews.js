import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-6xl mt-5 text-center font-semibold'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  gap-5'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;