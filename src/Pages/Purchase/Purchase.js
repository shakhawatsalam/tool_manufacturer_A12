import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import NavBar from '../../Shared/NavBar';

const Purchase = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [id]);
    const { _id, name, picture, price, minimum_order_quantity, available_quantity, description } = details;
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-4xl text-center font-semibold'>I am from purchase </h1>
            <div>
                <div className="hero min-h-[80vh]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={picture} className="max-w-sm rounded-lg shadow-2xl"  alt='car parts'/>
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <h1 className="text-3xl font-semibold mt-5">Minimum Order Quantity: {minimum_order_quantity}</h1>
                            <h1 className="text-3xl font-semibold mt-5">Available Quantity: {available_quantity}</h1>
                            <h1 className="text-3xl font-semibold mt-5">Price: {price}</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;