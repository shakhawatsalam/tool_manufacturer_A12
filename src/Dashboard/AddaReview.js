import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddaReview = () => {
    const [rating, setRating] = useState(0);
    const plus = () => {

        setRating(rating + 1);
    };
    const minus = () => {
        setRating(rating - 1);
    }


    const handelReviewSubmit = event => {
        event.preventDefault();
        console.log('clicked');
        const review = {
            img: event.target.img.value,
            name: event.target.name.value,
            rating: rating,
            description: event.target.description.value
        };
        fetch(' https://tranquil-earth-71509.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Review Is Added`);
                }
            });

        event.target.reset('')


    }
    return (
        <div>
            <h1 className='text-center text-5xl font-semibold'>Add a Review</h1>

            <form onSubmit={handelReviewSubmit} className='grid grid-cols-1 justify-items-center gap-5 mt-10'>
                <input required name='img' type="url" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                <input required name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />




                <label className="input-group justify-center">
                    {rating >= 5 ? <button onClick={plus} disabled className='btn btn-accent text-2xl'>+</button> : <button onClick={plus} className='btn btn-accent text-2xl'>+</button>}
                    <input required value={rating} name='rating' type="number" placeholder="rating" className="input input-bordered w-[15rem] max-w-xs" />
                    {rating < 1 ? <button onClick={minus} disabled className='btn btn-accent text-2xl'>-</button> : <button onClick={minus} className='btn btn-accent text-2xl'>-</button>}
                </label>
                <textarea required name='description' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                {rating > 5 || rating < 1 ? <input required type="submit" disabled className='btn' value="Submit" />
                    :
                    <input required type="submit" className='btn' value="Submit" />
                }
            </form>

        </div>
    );
};

export default AddaReview;