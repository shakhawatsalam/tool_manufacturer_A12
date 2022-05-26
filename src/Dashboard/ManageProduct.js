import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    // const [tools, setTools] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(` https://tranquil-earth-71509.herokuapp.com/tools`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-center font-semibold text-3xl'>Manage Product{tools.length}</h1>
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

                        {
                            tools.map((tool, index) => <ManageProductRow
                                key={tool._id}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></ManageProductRow>

                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteProductModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                ></DeleteProductModal>
            }
        </div>
    );
};

export default ManageProduct;