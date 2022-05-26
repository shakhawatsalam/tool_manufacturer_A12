import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ setDeletingOrder, refetch, deletingOrder }) => {
    const { name, email, _id, product } = deletingOrder;
    // delete handler
    const handleDelete = () => {
        fetch(` https://tranquil-earth-71509.herokuapp.com/tools/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>


            <input type="checkbox" id="delete-comfirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete this Order <span className='text-2xl'>({product})</span></h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-xs'>Delete</button>
                        <label for="delete-comfirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;