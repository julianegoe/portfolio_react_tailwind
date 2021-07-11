import React, { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './navbar/navbar';
import Home from './Home/Home'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './App.css';
import '../index.css';

function App() {
  const workRef = useRef()
  const homeRef = useRef()
  const contactRef = useRef()

  const [scrollElement, setScrollElement] = useState('')
  
 
  useEffect(() => {
    switch (scrollElement) {
      case 'home': homeRef.current.scrollIntoView({ behavior: 'smooth' })
      break;
      case 'work': workRef.current.scrollIntoView({ behavior: 'smooth' })
      break;
      case 'contact': contactRef.current.scrollIntoView({ behavior: 'smooth' })
      break;
      default: console.log("scroll to home")

    }
  }, [scrollElement])

  const scrollToRef = (conponent) => {
    setScrollElement(conponent)
  }


	return (
		<Router>
			<Navbar scrollToRef={scrollToRef} />
			
      <Route exact path="/" render={() => {
       return  (
         <>
         <div className="Home" ref={homeRef}>
         <Home />
         </div>
         <div className="Work" ref={workRef}>
         <Work />
         </div>
         <div className="Contact" ref={contactRef}> 
         <Contact />
         </div>
         </>
       )
      }} />

      <Route exact path="/myflix" render={() => {
        return <ProjectDetails project="myflix" />
      }} />

      <Route exact path="/meetapp" render={() => {
        return <ProjectDetails project="meetapp" />
      }} />

      <Route exact path="/pokedex" render={() => {
        return <ProjectDetails project="pokedex" />
      }} />
      </Router>
	
	);
}

export default App;
