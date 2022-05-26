import { stringify } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../../Shared/Footer';
import NavBar from '../../Shared/NavBar';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [details, setDetails] = useState([]);
    const [number, setNumber] = useState(1000);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [id]);
    const { _id, name, picture, price, minimum_order_quantity, available_quantity, description } = details;

    const plus = () => {

        setNumber(number + 100);
    };
    const minus = () => {
        setNumber(number - 100);
    }

    // handleOnSubmit
    const handleSubmit = event => {
        event.preventDefault();
        const order = {
            name: event.target.name.value,
            email: event.target.email.value,
            product: event.target.product.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
            price: price,
            quantity: stringify(number)
        };
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Successfully Booked`);
                }
            });
        event.target.reset('')

    }

    //showing error message
    // if (number > parseInt(minimum_order_quantity)) {
    //     toast.error(`You Can not order minimum ${minimum_order_quantity} And maximun ${available_quantity}`)
    // }
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-4xl text-center font-semibold'>I am from purchase </h1>
            <div>
                <div className="hero min-h-[80vh]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='car parts' />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <h1 className="text-3xl font-semibold mt-5">Minimum Order Quantity: {minimum_order_quantity}</h1>
                            <h1 className="text-3xl font-semibold mt-5">Available Quantity: {available_quantity}</h1>
                            <h1 className="text-3xl font-semibold mt-5">Price:${price}</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-2xl mt-9' >How Much Quantity Do You Order?</h1>
                <div className='flex justify-center mt-8'>
                    {
                        number >= parseInt(minimum_order_quantity) ? <button className='btn text-2xl' onClick={minus}>-</button>
                            :
                            <button className='btn text-2xl' disabled onClick={minus}>-</button>
                    }

                    <input type="number" value={number} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {
                        number <= parseInt(available_quantity) ? <button className='btn text-2xl' onClick={plus}>+</button>
                            : <button className='btn text-2xl' disabled onClick={plus}>+</button>
                    }

                </div>
                <h1 className='text-center text-2xl mt-9'>Order Information</h1>
                <div >
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-5 mt-10'>
                        <input type="text" name='name' readOnly disabled value={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' readOnly disabled value={user.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='product' readOnly disabled value={name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' required placeholder="address" className="input input-bordered w-full max-w-xs" />
                        <input type="tel" name='phone' required placeholder="+008" className="input input-bordered w-full max-w-xs" />
                        {
                            number >= parseInt(minimum_order_quantity) && number <= parseInt(available_quantity) ?
                                '' :
                                <p className='text-red-500'><small>You Can not order minimum {minimum_order_quantity} And maximun {available_quantity}</small></p>
                        }
                        {
                            number >= parseInt(minimum_order_quantity) && number <= parseInt(available_quantity) ?
                                <input type="submit" className='btn' value="Purchase" /> :
                                <input type="submit" disabled className='btn' value="Purchase" />
                        }
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;