import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const {data} = useQuery([])

    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Payment;