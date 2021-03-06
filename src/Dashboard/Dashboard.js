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
                <div className="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label for="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            {!admin &&
                                <>
                                    <li><Link to='/dashboard/myorder/:email'>My Order</Link></li>
                                    <li><Link to='/dashboard/addreview'>Add Review</Link></li></>
                            }
                            {admin &&
                                <>
                                    <li><Link to='/dashboard/users'>Make Admin</Link></li>
                                    <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                                    <li><Link to='/dashboard/manageorder'>Manage All Order</Link></li>
                                    <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>

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