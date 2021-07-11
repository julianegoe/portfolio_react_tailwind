import React from 'react';
import '../../index.css';
import {
    Link
  } from "react-router-dom";

function Navbar({scrollToRef}) {
    


    return (
        <nav className="fixed flex w-full items-center justify-end flex-wrap bg-gray-300 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <div  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <Link onClick={() => {
                    scrollToRef('home')
                }} to="/" >Home</Link>
                </div>
                <div  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <Link onClick={() => {
                    scrollToRef('work')
                }} to="/"  >Work</Link>
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                <Link onClick={() => {
                    scrollToRef('contact')
                }}  to="/" >Contact</Link>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar