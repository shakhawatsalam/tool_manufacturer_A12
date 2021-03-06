import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';




const NavBar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/blogs'}>blog</Link></li>
                        <li><Link to={'/myportfolio'}>My Portfolio</Link></li>
                        {
                            user ?
                                <>
                                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                </> :
                                ''
                        }
                        {
                            user ?
                                <li><button className='btn btn-link' onClick={logOut}>Sing out</button></li>
                                :
                                <li><Link to={'/login'}>Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">SK automobiles</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    
                    <li><Link to={''}>{user?.displayName}</Link></li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/blogs'}>blog</Link></li>
                    <li><Link to={'/myportfolio'}>My Portfolio</Link></li>
                    {
                        user ?
                            <>
                                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                            </> :
                            ''
                    }
                    {
                        user ?
                            <li><button className='btn btn-link' onClick={logOut}>Sing out</button></li>
                            :
                            <li><Link to={'/login'}>Login</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;