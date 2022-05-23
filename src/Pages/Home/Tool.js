import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    
    return (
        <div class="card w-96 bg-base-100 shadow-xl place-self-center">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <Link to={'/purchase'} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;