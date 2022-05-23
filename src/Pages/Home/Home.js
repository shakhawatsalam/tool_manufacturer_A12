import React from 'react';
import NavBar from '../../Shared/NavBar';
import Banner from './Banner';
import Business_Summary from './Business_Summary';
import Reviews from './Reviews';
import Tools from './Tools'

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-7xl mx-auto'>
                <Banner></Banner>
                <Tools></Tools>
                <Reviews></Reviews>
                <Business_Summary></Business_Summary>
            </div>
        </div>
    );
};

export default Home;