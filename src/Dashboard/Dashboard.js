import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const Dashboard = () => {
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
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            {/* {admin &&
                                <>
                                    <li><Link to='/dashboard/users'>All Users</Link></li>
                                    <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                                    <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                                </>
                         }  */}
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;