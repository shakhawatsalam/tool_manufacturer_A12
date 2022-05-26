import React from 'react';

const Review = ({ review }) => {
    const { img, name, rating, description } = review;


    return (
        <div class="card w-90 bg-base-100 place-self-center shadow-2xl mt-10">
            <div class="card-body items-center text-center">
                <div class="avatar">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img}  alt="profile Img"/>
                    </div>
                </div>
                <div class="rating">

                    {rating === 1 ? <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked readOnly disabled /> :
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" readOnly disabled  />}
                    {rating === 2 ? <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked readOnly disabled /> :
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" readOnly disabled  />}
                    {rating === 3 ? <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked readOnly disabled /> :
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" readOnly disabled  />}
                    {rating === 4 ? <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked readOnly disabled /> :
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" readOnly disabled  />}
                    {rating === 5 ? <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked readOnly disabled /> :
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" readOnly disabled  />}
                </div>
                <h1>{name}</h1>
                <p>Rating: {rating}</p>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Review;