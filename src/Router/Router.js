import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageFooter from '../Pages/Footer/PageFooter';
import Home from '../Pages/Home/Home';
import LayOut from '../Pages/LayOut/LayOut';
import Services from '../Pages/Services/Services';

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
            },
            {
                path:'/services',
                loader: async () => fetch('http://localhost:5000/services'),
                element:<Services></Services>
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