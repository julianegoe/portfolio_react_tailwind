import React, { useState } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

function Navbar({ scrollToRef }) {
	const [navDisplay, setNavDisplay] = useState('hidden');

	const showMenu = () => {
		navDisplay === 'hidden' ? setNavDisplay('block') : setNavDisplay('hidden');
	};

	return (
		<nav className='fixed flex w-full items-center flex-wrap justify-between bg-black p-6 z-10'>
			<div
				className='lg:hidden'
				onClick={() => {
					showMenu();
				}}>
				<Hamburger />
			</div>
			<div
				className={`w-full ${navDisplay} flex-grow lg:flex lg:items-center lg:w-auto`}>
				<div className='text-sm lg:flex-grow'>
					<div className='block mt-4 sm:text-4xl sm:text-center lg:text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-4'>
						<Link
							onClick={() => {
								scrollToRef('home');
							}}
							to='/'>
							Home
						</Link>
					</div>
					<div className='block mt-4 sm:text-4xl sm:text-center lg:text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-4'>
						<Link
							onClick={() => {
								scrollToRef('work');
							}}
							to='/'>
							Work
						</Link>
					</div>
					<div className='block mt-4 sm:text-4xl sm:text-center lg:text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500'>
						<Link
							onClick={() => {
								scrollToRef('contact');
							}}
							to='/'>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
