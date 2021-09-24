import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import myflix from './macbook.png';
import meetapp from './meetapp.png';
import pokedex from './pokemon.png';
import portfolio from './portfolio.png';
import chattyapp from './chattyapp.png';
import myflixAngular from './myflix_angular.png';
import api from './api.png';
import './Work.css';

function Work() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-10 gap-6 mt-10 mx-auto '>
			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/myflix'>
					<div className='min-h-62'>
						<img className='mx-auto pb-5' src={myflix} alt='' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>MyFlix - React</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						MyFlix is a{' '}
						<span className='font-bold'>Single Page Application</span> built
						with <span className='font-bold'>React</span> and
						<span className='font-bold'> BootstrapCSS</span> . It showcases
						movie data supplied by a REST API.
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>

				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/CF_myflix_client',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
					<div
						onClick={() => {
							window.open('https://app-myflix.netlify.app/', '_blank');
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						Live Demo
					</div>
				</div>
			</article>

			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/meetapp'>
					<div className='min-h-62'>
						<img className='mx-auto pb-5' src={meetapp} alt='' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>MeetApp</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						MeetApp is a<span className='font-bold'> Progressive Web App</span>{' '}
						built with <span className='font-bold'>React</span> and and{' '}
						<span className='font-bold'>CSS3</span> . It displays and visualizes
						event data supplied by the Google Calendar API with{' '}
						<span className='font-bold'>Recharts</span>.
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>
				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/CF_meet-app',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
					<div
						onClick={() => {
							window.open(
								'https://julianegoe.github.io/CF_meet-app/',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						Live Demo
					</div>
				</div>
			</article>

			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/pokedex'>
					<div className='min-h-62'>
						<img className='mx-auto pb-5' src={pokedex} alt='' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>Pokédex</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						Pokédex is a<span className='font-bold'> Web Application </span>
						built with{' '}
						<span className='font-bold'>
							Vanilla JavaScript, SCSS and HTML5
						</span>
						. It displays pokémon data supplied by the Pokédex API.
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>
				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/CF_pokedex_application',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
					<div
						onClick={() => {
							window.open(
								'https://julianegoe.github.io/CF_pokedex_application/',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						Live Demo
					</div>
				</div>
			</article>

			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/chattyapp'>
					<div className='mx-10'>
						<img className='mx-auto pb-5' src={chattyapp} alt='Chatty App' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>Chatty App</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						Chatty App is a <span className='font-bold'>Hybrid App </span>
						built with{' '}
						<span className='font-bold'>
							React Native, Expo and Google Firebase
						</span>
						. Users can chat in one room and send each other photos.
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>
				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/CF_chat_app',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
					<div
						onClick={() => {
							window.open(
								'https://www.youtube.com/watch?v=_tZZViF0pDU',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						Live Demo
					</div>
				</div>
			</article>

			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/myflix-angular'>
					<div className='min-h-62'>
						<img className='mx-auto pb-5' src={myflixAngular} alt='' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>MyFlix - Angular</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						MyFlix is a{' '}
						<span className='font-bold'> Single Page Application </span>
						built with{' '}
						<span className='font-bold'>Angular and Material Design</span>. It
						showcases movie data supplied by a REST API and features a user
						profile and favorites list.
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>
				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/myflix-Angular-client',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
					<div
						onClick={() => {
							window.open(
								'https://julianegoe.github.io/myflix-Angular-client/movies',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						Live Demo
					</div>
				</div>
			</article>

			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/portfolio'>
					<div className='min-h-62'>
						<img className='mx-auto pb-5' src={portfolio} alt='' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>Portfolio Website</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						This portfolio website is a
						<span className='font-bold'> Single Page Application</span> built
						with <span className='font-bold'>React</span> and{' '}
						<span className='font-bold'>TailwindCSS</span> .
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>
				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/portfolio_react_tailwind',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
				</div>
			</article>

			<article className='md:justify-self-center flex flex-col shadow-xl mx-2 max-w-lg bg-red-100 py-10 px-10 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md'>
				<Link to='/movie-api'>
					<div className='min-h-62'>
						<img className='mx-auto pb-5' src={api} alt='' />
					</div>
					<h2 className='font-bold mb-5 text-gray-800'>Movie API</h2>
					<p className='text-sm leading-relaxed text-gray-700'>
						This is the backend to the MyFlix clients. It's a
						<span className='font-bold'> REST API</span> built with{' '}
						<span className='font-bold'>Node.js, Express and MongoDB.</span> It
						has serveral endpoints to fetch and alter movie and user data.
						<span className='font-bold'> Read more...</span>
					</p>
				</Link>
				<div className='flex flex-row justify-around pt-5'>
					<div
						onClick={() => {
							window.open(
								'https://github.com/julianegoe/CF_movie_api',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						GitHub
					</div>
					<div
						onClick={() => {
							window.open(
								'http://myflix-0001.herokuapp.com/documentation.html',
								'_blank'
							);
						}}
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'>
						Documentation
					</div>
				</div>
			</article>
		</div>
	);
}

export default Work;
