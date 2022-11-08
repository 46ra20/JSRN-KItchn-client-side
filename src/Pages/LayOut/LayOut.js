import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../Footer/PageFooter';
import MenuBar from '../MenuBar/MenuBar';

const LayOut = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </div>
    );
};

export default LayOut;