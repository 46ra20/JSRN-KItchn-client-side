import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageFooter from '../Pages/Footer/PageFooter';
import Home from '../Pages/Home/Home';
import LayOut from '../Pages/LayOut/LayOut';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'/footer',
        element:<PageFooter></PageFooter>
    }
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;