import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageFooter from '../Pages/Footer/PageFooter';
import Home from '../Pages/Home/Home';
import LayOut from '../Pages/LayOut/LayOut';
import Login from '../Pages/LogFrom/Login';
import Register from '../Pages/LogFrom/Register';
import MyReview from '../Pages/MyReview/MyReview';
import AddService from '../Pages/Services/AddService';
import ServiceDetails from '../Pages/Services/ServiceDetails';
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
            },
            {
                path:'/service/details/:serviceId',
                loader: async ({ params }) => fetch(`http://localhost:5000/details/${params.serviceId}`),
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/my-review',
                element:<MyReview></MyReview>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add-service',
                element:<AddService></AddService>
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