import React, { useState, useEffect } from 'react';

function Home() {
	const [tech, setTech] = useState('React');

	useEffect(() => {
		const interval = setInterval(() => {
			showStack();
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const showStack = () => {
		const stack = [
			'React',
			'TailwindCSS',
			'MongoDB',
			'ExpressJS',
			'HTML5',
			'CSS3',
			'BootstrapJS',
			'JavaScript',
		];

		const randomIndex = Math.floor(Math.random() * stack.length);
		setTech(stack[randomIndex]);
	};

	return (
		<div className='grid phone:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 xl: 2xl:grid-cols-2'>
			<div className='phone:col-span-1 md:col-start-1 md:col-span-1 xl:col-start-1 xl:col-span-1 width-1/2 h-screen  bg-profile bg-cover'>
				<div className='bg-red-300 mix-blend-screen width-1/2 h-screen'></div>
			</div>
			<div className='phone:col-span-1 md:col-start-1 md:col-span-1 xl:col-start-2 xl:col-span-1 width-1/2 h-screen bg-gray-100'>
				<h1 className='leading-snug pt-32 font-welcome phone:mb-5 phone:text-4xl text-6xl'>
					I'm an aspiring web developer from Berlin. Check out the cool projects
					I built with <span className='bg-green-500'>{tech}.</span>
				</h1>
			</div>
		</div>
	);
}

export default Home;
