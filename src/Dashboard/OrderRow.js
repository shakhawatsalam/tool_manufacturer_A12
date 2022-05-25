import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeletingOrder }) => {
    const { name, email, product, quantity, price, _id } = order;
    const totalPrice = parseInt(quantity) * price;
    return (
        <tr key={order._id}>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${totalPrice}</td>
            
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs'>Payment</button></Link>}
                {(order.price && order.paid) && <button className='btn btn-xs btn-success'>Paid</button>}
            </td>
            <td>
                {(order.price && !order.paid) ?
                    <label onClick={() => setDeletingOrder(order)} for="delete-comfirm-modal" class="btn btn-xs btn-error">DELETE</label>
                    :
                    <span>{order.transactionId}</span>
                }
            </td>
        </tr>
    );
};

export default OrderRow;