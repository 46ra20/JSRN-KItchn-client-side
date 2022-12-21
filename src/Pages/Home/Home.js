import React, { useContext } from 'react';
import Loading from '../../Components/Loading/Loading';
import { AuthProvider } from '../../UserContext/UserContext';
import MyTeam from './MyTeam';
import OurServices from './OurServices';
import Slider from './Slider';
import SomeOtherInformation from './SomeOtherInformation';

const Home = () => {
    const {pageTitle,pageLoading, setPageLoading}= useContext(AuthProvider)
    pageTitle('Home')
    setPageLoading(true)
    return (
        <>
        <div className={`${pageLoading?"":"hidden"}`}>
            <Loading/>
        </div>
        <div className={`container mx-auto ${pageLoading?"hidden":""}`}>
            <Slider></Slider>
            <OurServices></OurServices>
            <MyTeam></MyTeam>
            <SomeOtherInformation></SomeOtherInformation>
        </div>
        </>
    );
};

export default Home;