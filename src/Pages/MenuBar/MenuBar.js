import { Navbar } from 'flowbite-react';
import React from 'react';
import logo from '../../Assist/JSRN Kitchen-edit.png'


const MenuBar = () => {
    return (
        <div className='border rounded-lg shadow'>
            <Navbar
                fluid={true}
                rounded={true}
                container={'true'}
            >
                <Navbar.Brand href="https://flowbite.com/">
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
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MenuBar;