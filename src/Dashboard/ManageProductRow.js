import React from 'react';

const ManageProductRow = ({ tool, index, setDeletingOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool.name}</td>
            <td>${tool.price}</td>
            <td>{tool.available_quantity}</td>
            <td><label onClick={() => setDeletingOrder(tool)} for="delete-comfirm-modal" className="btn btn-xs btn-error">DELETE</label></td>
        </tr>

    );
};

export default ManageProductRow;