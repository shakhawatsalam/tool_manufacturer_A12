import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(` https://tranquil-earth-71509.herokuapp.com/reviews`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-6xl mt-10 text-center font-semibold'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  gap-5'>
                {
                    reviews?.slice(-3).map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;