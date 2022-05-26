import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const profile = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
        };
        fetch(' https://tranquil-earth-71509.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Review Is Added in to database`);
                }
            });

        event.target.reset('')
    }
    return (
        <div>
            <h1 className='text-center font-semibold text-3xl'>My Profile</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-5 mt-10'>
                <input name='name' type="text" value={user.displayName} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input name='email' type="text" value={user.email} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input name='education' type="text" placeholder="education" className="input input-bordered w-full max-w-xs" />
                <input name='location' type="text" placeholder="location" className="input input-bordered w-full max-w-xs" />
                <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                <input className='btn' type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default MyProfile;