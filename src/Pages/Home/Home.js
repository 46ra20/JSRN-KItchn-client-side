import React from 'react';
import MyTeam from './MyTeam';
import OurServices from './OurServices';
import Slider from './Slider';
import SomeOtherInformation from './SomeOtherInformation';

const Home = () => {
    return (
        <div className=' container mx-auto'>
            <Slider></Slider>
            <OurServices></OurServices>
            <SomeOtherInformation></SomeOtherInformation>
            <MyTeam></MyTeam>
        </div>
    );
};

export default Home;