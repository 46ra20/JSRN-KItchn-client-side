import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails)
    const {img, name, price,ratting, description} = serviceDetails;
    return (
        <div className='my-4'>
                <div className='sm:w-full md:w-2/4 mx-auto border rounded p-5 bg-white'>
                    <img src={img} alt='' className='shadow-lg rounded'></img>
                    <div>
                        <h2 className='text-center text-3xl my-2'><span className='font-semibold'>Product Name:- </span> {name}</h2>
                        <p className='text-center'><span className='font-semibold'>Description:-</span> {description}</p>
                        <div className='flex justify-between my-3 font-semibold text-2xl'>
                            <p>Price:- {price}$</p>
                            <p>Ratting:- {ratting}stars</p>
                        </div>
                    </div>
                </div>
            <div className='sm:w-full md:w-2/4 mx-auto p-4 border bg-white rounded mt-5'>
                    <h2>Customer Review:-</h2>
                </div>
        </div>
    );
};

export default ServiceDetails;