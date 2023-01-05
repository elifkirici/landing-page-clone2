import React from 'react'
import '../App.css';
function Navbar() {
    return (
        <nav className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 drop-shadow-md ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a className="block  ezvrcN " href="/">
                </a>
                <div className="items-center justify-start hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-6 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray rounded md:bg-transparent  md:p-0 " aria-current="page">Solutions</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray rounded  md:p-0">Product</a>
                        </li>
                        <li>
                            <a href="/" class="block py-2 pl-3 pr-4 text-gray rounded  md:p-0">Resources</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray rounded  md:p-0">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 items-center">
                    <ul className="flex flex-col p-4  mt-6 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 " >
                        <li> <a href="/" className="hidden py-2 pl-3 pr-4 text-gray rounded  md:p-0 md:block">Log in</a></li>
                    </ul>
                    <button type="button" className="text-white hidden bg-blue hover:bg-blue-900 focus:outline-none font-medium rounded-lg text-sm  px-3 py-0 text-center mr-3 md:mr-0 md:block ">Free Trial</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray dark:focus:ring-gray-600 max-h-2" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar