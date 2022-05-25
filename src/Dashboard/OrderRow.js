import React from 'react';

const OrderRow = ({ order, index, setDeletingOrder }) => {
    const { name, email, product, quantity } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-comfirm-modal" class="btn btn-xs btn-error">open modal</label>
            </td>

        </tr>
    );
};

export default OrderRow;