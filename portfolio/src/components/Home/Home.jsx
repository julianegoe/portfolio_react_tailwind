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
		<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 xl: 2xl:grid-cols-2'>
			<div className='sm:col-span-1 md:col-start-1 md:col-span-1 xl:col-start-1 xl:col-span-1 width-1/2 h-screen  bg-profile bg-cover'>
				<div className='bg-red-300 mix-blend-screen width-1/2 h-screen'></div>
			</div>
			<div className='sm:col-span-1 md:col-start-1 md:col-span-1 xl:col-start-2 xl:col-span-1 width-1/2 h-screen bg-gray-100'>
				<h1 className='font-welcome sm:leading-normal md:leading-relaxed sm:mb-3 sm:text-5xl md:text-6xl md:pt-32'>
					I'm an aspiring web developer from Berlin. Check out the cool projects
					I built with <span className='bg-green-500'>{tech}.</span>
				</h1>
			</div>
		</div>
	);
}

export default Home;
