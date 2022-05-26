import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, picture, price, minimum_order_quantity, available_quantity, description } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl place-self-center">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h2 className='text-xl'>Price:${price}</h2>
                <p>{description}</p>
                <h1 className='text-xl'>Available: {available_quantity}</h1>
                <h1 className='text-xl'>Min-Order-Quantity: {minimum_order_quantity}</h1>
                <div class="card-actions">
                    <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;