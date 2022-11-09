import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event)=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
    }
    return (
        <div className='sm:w-full md:w-2/4 lg:w-1/4 my-5 sm:mx-3 md:mx-auto p-4 border rounded bg-white shadow'>

            <form onSubmit={handleLogin}>   
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required=""/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required=""/>
                    <p>You have no account? Please <Link to={'/register'} className='text-blue-500'>Create One</Link></p>
                </div>
                <button type="submit" className="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                
            </form>
        </div>
    );
};

export default Login;