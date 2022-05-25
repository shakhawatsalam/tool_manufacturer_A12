import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                        <Outlet></Outlet>

                    </div>
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/myorder/:email'>My Order</Link></li>
                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                            {admin &&
                                <>
                                    <li><Link to='/dashboard/users'>All Users</Link></li>

                                </>
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;