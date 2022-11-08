import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Pages/LayOut/LayOut';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>
    }
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;