import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';

const LayOut = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;