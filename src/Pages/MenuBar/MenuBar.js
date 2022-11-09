import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assist/JSRN Kitchen-edit.png'
import { AuthProvider } from '../../UserContext/UserContext';


const MenuBar = () => {
    const {logOut,  userData} = useContext(AuthProvider);
    const logOutUser=()=>{
        logOut()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    console.log(userData)
    return (
        <div className='shadow bg-white'>
            <div className='container mx-auto'>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand>
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            JSRN Kitchen
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <NavLink to={'home'}>
                            <button type="button" className="py-2.5 px-5 mr-2 my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Home</button>

                        </NavLink>
                        <NavLink to={'services'}>
                            <button type="button" className="py-2.5 px-5 mr-2  my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Services</button>

                        </NavLink>
                        
                        {
                            !userData?.uid ? <>
                            
                            <NavLink to={'/login'}>
                                <button type="button" className="py-2.5 px-5 mr-2 my-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">LogIn</button>

                            </NavLink>
                            <NavLink to={'/register'}>
                                <button type="button" className="py-2.5 px-5 mr-2 my-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SingUp</button>

                            </NavLink>
                            </>
                            :
                            <>
                                <NavLink>
                                    <button type="button" className="py-2.5 px-5 mr-2  my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Service</button>

                                </NavLink>
                                <NavLink>
                                    <button type="button" className="py-2.5 px-5 mr-2  my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">My Review</button>

                                </NavLink>
                                <NavLink>
                                    <button type="button" onClick={logOutUser} className="py-2.5 px-5 mr-2 my-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">LogOut</button>

                                </NavLink>
                            </>
                        }
                        
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default MenuBar;