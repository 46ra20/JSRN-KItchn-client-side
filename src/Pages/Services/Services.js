import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../UserContext/UserContext';
import Service from './Service';

const Services = () => {
    //collect data from server
    const {pageTitle} = useContext(AuthProvider);
    pageTitle('Services')
    const services = useLoaderData();
    return (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-5'>
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
    );
};

export default Services;