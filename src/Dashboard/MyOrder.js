import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/order?email=${email}`

        try {
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.length) {
                        setOrders(data);
                        console.log(data);
                    }
                    else if (data.error) {
                        signOut(auth);

                    }
                })
        } catch (error) {

        }
    }, [user?.email])
    return (
        <div>
            <h1 className='text-center text-amber-500 text-3xl mt-5 font-semibold'>My Order</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td><button class="btn btn-xs">DELETE</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;