import React from 'react';

const AllorderRow = ({ order, index, setDeletingOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>${order.price}</td>
            <td>{order.available_quantity}</td>
            <td><label onClick={() => setDeletingOrder(order)} for="delete-comfirm-modal" className="btn btn-xs btn-error">DELETE</label></td>
        </tr>

    );
};

export default AllorderRow;