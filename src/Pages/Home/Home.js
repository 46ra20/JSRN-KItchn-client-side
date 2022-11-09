import React from 'react';
import OurServices from './OurServices';
import Slider from './Slider';

const Home = () => {
    return (
        <div className=' container mx-auto'>
            <Slider></Slider>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;