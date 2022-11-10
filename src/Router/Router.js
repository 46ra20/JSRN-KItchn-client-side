import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Pages/Blog/Blog';
import PageFooter from '../Pages/Footer/PageFooter';
import Home from '../Pages/Home/Home';
import LayOut from '../Pages/LayOut/LayOut';
import Login from '../Pages/LogFrom/Login';
import Register from '../Pages/LogFrom/Register';
import MyReview from '../Pages/MyReview/MyReview';
import AddService from '../Pages/Services/AddService';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Services from '../Pages/Services/Services';
import PrivateRouter from './PrivateRouter';

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
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
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
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;