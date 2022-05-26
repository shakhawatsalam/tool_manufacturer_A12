import React from 'react';
import NavBar from '../../Shared/NavBar';

const Blog = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='mt-10'>
                <h1 className='text-center text-3xl font-semibold '>How will you improve the performance of a React Application?</h1>
                <p className='text-center mt-5'>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
                <h1 className='text-center text-3xl font-semibold '> What are the different ways to manage a state in a React application?</h1>
                <p className='text-center mt-5 font-medium'>There are four main types of state you need to properly manage in your React apps:</p>
                <ul className='text-center font-medium mt-4'>
                    <li>1. Local state.</li>
                    <li>2. Global state</li>
                    <li>3. Server state.</li>
                    <li>4. URL state.</li>
                </ul>
                <h1 className='text-center text-3xl font-semibold '>How does prototypical inheritance work?</h1>
                <p className='text-center mt-5'><p className='text-center mt-5'>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p></p>
                <h1 className='text-center text-3xl font-semibold '>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p className='text-center mt-5 font-medium'>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                <h1 className='text-center text-3xl font-semibold '>What is a unit test? Why should write unit tests?</h1>
                <p className='text-center mt-5 font-medium'>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>
        </>
    );
};

export default Blog;