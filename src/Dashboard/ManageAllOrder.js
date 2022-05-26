import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllorderRow from './AllorderRow';
import DeleteProductModal from './DeleteProductModal';

const ManageAllOrder = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(` https://tranquil-earth-71509.herokuapp.com/order`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));
    console.log(orders);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-center font-semibold text-3xl'>Manage All Order{orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            orders.map((order, index) => <AllorderRow
                                key={order._id}
                                tool={order}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></AllorderRow>

                            )
                        } */}
                    </tbody>
                </table>
            </div>
            {/* {
                deletingOrder && <DeleteProductModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                ></DeleteProductModal>
            } */}
        </div>
    );
};




export default ManageAllOrder;