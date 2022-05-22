import React from 'react';
import NavBar from '../../Shared/NavBar';
import Banner from './Banner';
import Tools from './Tools'

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-7xl mx-auto'>
                <Banner></Banner>
                <Tools></Tools>
            </div>
        </div>
    );
};

export default Home;