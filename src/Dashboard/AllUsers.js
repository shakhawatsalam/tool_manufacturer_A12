import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center'>All users{users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UsersRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UsersRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;