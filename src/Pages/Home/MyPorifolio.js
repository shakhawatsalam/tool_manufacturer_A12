import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';

const MyPorifolio = () => {
    return (
        <>
            <NavBar></NavBar>
            <div>
                <h1 className='text-center font-bold text-3xl mt-3'>Name: Shakhawat Salam (Shawon)</h1>
                <h1 className='text-center font-bold text-3xl mt-3'>Email: shakhawatsalam726@gmail.com</h1>
                <h1 className='text-center font-bold text-3xl mt-3'>Education: Honors 2nd year Subject: Managemant</h1>
                <h1 className='text-center font-bold text-3xl mt-3'>Technologies or skills you have as a web developer.</h1>
                <ul className='text-center font-bold text-3xl mt-3'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BootStrap</li>
                    <li>TailwindCss</li>
                    <li>JavaScript</li>
                    <li>Es6</li>
                    <li>React</li>
                    <li>JWT</li>
                    <li>NodeJs basic</li>
                    <li>MongoDB</li>
                </ul>
                <h1 className='text-center font-bold text-3xl mt-3 text-amber-400'>Three Best Project</h1>

                <a target="_blank" rel="noreferrer" className='block text-center font-bold text-3xl mt-3 text-blue-700' href="https://inventory-management-accca.web.app/"><span className='text-center'>1/WareHouse Managemant</span></a>
                <a target="_blank" rel="noreferrer" className='block text-center font-bold text-3xl mt-3 text-blue-700' href="https://independent-service-prov-2654f.web.app/"><span className='text-center'>2/Independent service Providor</span></a>
                <a target="_blank" rel="noreferrer" className='block text-center font-bold text-3xl mt-3 text-blue-700' href="https://benevolent-marshmallow-06873a.netlify.app/"><span className='text-center'>3/graphics cards shop</span></a>

            </div>
        </>
    );
};

export default MyPorifolio;