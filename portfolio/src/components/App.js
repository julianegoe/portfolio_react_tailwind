import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './Home/Home';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import myflix from './Work/macbook.png';
import meetapp from './Work/meetapp.png';
import pokedex from './Work/pokemon.png';
import portfolio from './Work/portfolio.png';
import chattyapp from './Work/chattyapp.png';
import myflixAngular from './Work/myflix_angular.png';
import api from './Work/api.png';
import './App.css';
import '../index.css';
import {
	myflixReact,
	myfliAngular,
	meetApp,
	chattyApp,
	portfolioText,
	movieApi,
	pokemonText,
} from './detailTemplates';

function App() {
	const workRef = useRef();
	const homeRef = useRef();
	const contactRef = useRef();

	const [scrollElement, setScrollElement] = useState('');

	useEffect(() => {
		switch (scrollElement) {
			case 'home':
				homeRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'work':
				workRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'contact':
				contactRef.current.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				console.log('scroll to home');
		}
		return function cleanup() {
			setScrollElement('');
		};
	}, [scrollElement]);

	const scrollToRef = (conponent) => {
		setScrollElement(conponent);
	};

	return (
		<Router className='box-border '>
			<Navbar scrollToRef={scrollToRef} />

			<Route
				exact
				path='/'
				render={() => {
					return (
						<>
							<div className='Home' ref={homeRef}>
								<Home />
							</div>
							<div className='Work' ref={workRef}>
								<Work />
							</div>
							<div className='Contact' ref={contactRef}>
								<Contact />
							</div>
						</>
					);
				}}
			/>

			<Route
				exact
				path='/myflix'
				render={() => {
					return (
						<ProjectDetails
							project='MyFlix - React'
							image={myflix}
							text={myflixReact}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/meetapp'
				render={() => {
					return (
						<ProjectDetails project='MeetApp' image={meetapp} text={meetApp} />
					);
				}}
			/>

			<Route
				exact
				path='/pokedex'
				render={() => {
					return (
						<ProjectDetails
							project='Pokédex'
							image={pokedex}
							text={pokemonText}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/chattyapp'
				render={() => {
					return (
						<ProjectDetails
							project='Chatty App'
							image={chattyapp}
							text={chattyApp}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/portfolio'
				render={() => {
					return (
						<ProjectDetails
							project='Portfolio'
							image={portfolio}
							text={portfolioText}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/myflix-angular'
				render={() => {
					return (
						<ProjectDetails
							project='MyFlix - Angular'
							image={myflixAngular}
							text={myfliAngular}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/movie-api'
				render={() => {
					return (
						<ProjectDetails project='Movie API' image={api} text={movieApi} />
					);
				}}
			/>
		</Router>
	);
}

export default App;
