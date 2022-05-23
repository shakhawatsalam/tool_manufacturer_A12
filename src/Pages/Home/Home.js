import React from 'react';
import Footer from '../../Shared/Footer';
import NavBar from '../../Shared/NavBar';
import Banner from './Banner';
import Business_Summary from './Business_Summary';
import ContactUs from './ContactUs';
import ExtraPartTwo from './ExtraPartTwo';
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
                <ExtraPartTwo></ExtraPartTwo>
                <Business_Summary></Business_Summary>
                <ContactUs></ContactUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;