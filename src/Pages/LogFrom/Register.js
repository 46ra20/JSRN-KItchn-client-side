import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../UserContext/UserContext';

const Register = () => {
    const [accept, setAccept] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState(true)
    const [userPassword, setUserPassword] = useState('')
    //create user with email and password
    const {singUp, pageTitle} = useContext(AuthProvider);

    pageTitle('Sing up')
    //matching password
    const matchPassword = (e) =>{
        const pass = e.target.value;
        if(pass === userPassword){
            setConfirmPassword(true)
        }
        else{
            setConfirmPassword(false);
        }

    }

    //password from user input
    const storePassword = e =>{
        const inPass = e.target.value;
        setUserPassword(inPass)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.userName.value
        const email = from.email.value;
        const password = from.confirm_password.value;
        if(confirmPassword){
            //create user with email and password
            singUp(email, password)
                .then(result => {
                    console.log(result.user)
                    from.reset();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className = 'sm:w-full md:w-2/4 lg:w-1/4 my-5 sm:mx-3 md:mx-auto p-4 border rounded bg-white shadow'>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="text" id="first_name" name='userName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Md Rakib Bhuiyan" required="" />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" name='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" name='password' onBlur={storePassword} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                    <input type="password" name='confirm_password' onBlur={matchPassword} id="confirm_password" className={`${confirmPassword? "bg-gray-50 border border-gray-300 text-gray-900":"bg-red-50 border-red-300 text-red-900"} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="•••••••••" required="" />
                    {confirmPassword||<p className='text-red-300'>Password does't match....</p>}
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" onClick={()=> setAccept(!accept)}/>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <Link className="text-blue-600 hover:underline dark:text-blue-500" >terms and conditions</Link>.</label>
                </div>
                <button type="submit" className="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={accept}>Sing Up</button>
                <p className='mt-5'>Have an account? Please <Link to={'/login'} className='text-blue-500'>Log In</Link></p>
            </form>
        </div>
    );
};

export default Register;