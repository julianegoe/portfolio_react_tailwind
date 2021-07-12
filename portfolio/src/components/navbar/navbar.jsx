import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

function Navbar({ scrollToRef }) {
	return (
		<nav className='fixed flex w-full items-center flex-wrap bg-black p-6 z-10'>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
					<div className='block mt-4 lg:inline-block lg:mt-0 text-white text-lg mr-4'>
						Juliane
					</div>
					<div className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-4'>
						<Link
							onClick={() => {
								scrollToRef('home');
							}}
							to='/'>
							Home
						</Link>
					</div>
					<div className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-4'>
						<Link
							onClick={() => {
								scrollToRef('work');
							}}
							to='/'>
							Work
						</Link>
					</div>
					<div className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500'>
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
