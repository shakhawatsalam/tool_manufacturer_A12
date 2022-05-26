import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {



    const handleAddProductButton = event => {
        event.preventDefault();
        const addProduct = {
            name: event.target.name.value,
            price: event.target.price.value,
            minimum_order_quantity: event.target.minimum.value,
            available_quantity: event.target.available.value,
            description: event.target.description.value,
            picture: event.target.picture.value
        };
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Review Is Added`);
                }
            });

        event.target.reset('')
        console.log(addProduct);
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Add Product</h1>
            <form onSubmit={handleAddProductButton} className='grid grid-cols-1 justify-items-center gap-5 mt-10'>
                <input name='name' type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                <input name='price' type="number" placeholder="Price" class="input input-bordered w-full max-w-xs" />
                <input name='minimum' type="number" placeholder="minimum quantity" class="input input-bordered w-full max-w-xs" />
                <input name='available' type="number" placeholder="available quantity" class="input input-bordered w-full max-w-xs" />
                <textarea name='description' type="text" placeholder="description" class="input input-bordered w-full max-w-xs" />
                <input name='picture' type="url" placeholder="picture" class="input input-bordered w-full max-w-xs" />
                <input type="submit" className='btn' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;