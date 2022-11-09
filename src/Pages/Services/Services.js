import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    //collect data from server
    const services = useLoaderData();
    const [photo, setPhoto] = useState([])
    console.log(photo)
    return (
        <PhotoProvider>
            <PhotoView src={photo}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-5'>
                    {
                        services.map(service => <Service service={service} setPhoto={setPhoto} key={service._id}></Service>)
                    }
                </div>
            </PhotoView>
        </PhotoProvider>
    );
};

export default Services;