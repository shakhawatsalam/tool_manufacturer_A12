import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Shared/Loading'
import DeleteModal from './DeleteModal';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [deletingOrder, setDeletingOrder] = useState(null);
    // const [orders, setOrders] = useState([]);
    const email = user?.email;

    const { data: orders, isLoading, refetch } = useQuery('doctors', () => fetch(`http://localhost:5000/order?email=${email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
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
                                orders.map((order, index) => <OrderRow
                                    order={order}
                                    key={order._id}
                                    index={index}
                                    refetch={refetch}
                                    setDeletingOrder={setDeletingOrder}
                                ></OrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deletingOrder && <DeleteModal
                        deletingOrder={deletingOrder}
                        refetch={refetch}
                        setDeletingOrder={setDeletingOrder}
                    ></DeleteModal>
                }
            </div>
        </div>
    );
};

export default MyOrder;