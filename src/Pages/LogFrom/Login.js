import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../UserContext/UserContext';

const Login = () => {
    const { logInWithGoogle, logInWithEmailAndPass,pageTitle } = useContext(AuthProvider);
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const location= useLocation();
    const from = location?.state?.from || '/';
    console.log(location)
    console.log(from);

    pageTitle('Login')
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInWithEmailAndPass(email, password)
        .then(() => {
            from.reset()
            console.log(from)
            navigate(from,{replace:true})
        })
        .catch(err => {
            if(err.code === "auth/user-not-found"){
                setError("No user found with this email")
            }
            if(err.code === "auth/wrong-password"){
                setError("Wrong Password")
            }
        })

    }

    //login with google 
    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(() => {
                navigate(from,{replace:true})
            })
            .catch(err => setError(err.code))
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
                    {
                        error && <p className='text-red-400'>{error}</p>
                    }
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>                
            </form>
            <div>
                <p className='text-center my-3'>Or LogIn with</p>
                <button onClick={handleGoogleLogin} className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-32 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Google
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Login;