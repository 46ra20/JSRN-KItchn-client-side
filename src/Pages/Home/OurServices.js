import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../Services/Service';

const OurServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-server-46ra20.vercel.app/home')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center font-semibold'>Our Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-5 gap-6'>
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }  
                </div>

                <div className='text-center'>
                    <NavLink to={'/services'}>
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">View All</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default OurServices;