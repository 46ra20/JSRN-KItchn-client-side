import React, { useContext } from 'react';
import { AuthProvider } from '../../UserContext/UserContext';
import MyTeam from './MyTeam';
import OurServices from './OurServices';
import Slider from './Slider';
import SomeOtherInformation from './SomeOtherInformation';

const Home = () => {
    const {pageTitle}= useContext(AuthProvider)
    pageTitle('Home')
    return (
        <div className=' container mx-auto'>
            <Slider></Slider>
            <OurServices></OurServices>
            <MyTeam></MyTeam>
            <SomeOtherInformation></SomeOtherInformation>
        </div>
    );
};

export default Home;