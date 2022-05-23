import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card w-90 bg-base-100 place-self-center shadow-2xl mt-10">
            <div class="card-body items-center text-center">
                <div class="avatar">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <h1>{review.name}</h1>
                <p>We are using cookies for no reason.</p>

            </div>
        </div>
    );
};

export default Review;