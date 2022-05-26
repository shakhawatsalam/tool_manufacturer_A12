import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-[80vh]" style={{ backgroundImage: " url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Best Car Parts</h1>
                    <p className="mb-5"> Our built-in vehicle selector also allows you to search from our catalog of high-quality aftermarket parts and accessories by year, make, and model—so you're always guaranteed a perfect fit for your vehicle.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;