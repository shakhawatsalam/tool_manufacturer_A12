import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data));

    }, [])
    return (
        <div>
            <h1 className='text-6xl mt-5 text-center font-semibold'>Tools/Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;