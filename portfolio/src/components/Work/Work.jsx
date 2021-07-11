import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../../index.css';
import myflix from './macbook.png';
import meetapp from './meetapp.png';
import pokedex from './pokemon.png';
import portfolio from './portfolio.png'
import './Work.css'


function Work() {

    return (
        <div className="container pt-24">
    
            <div className="grid grid-cols-2 justify-center p-10 gap-1.5 "> 
                <div className="col-auto bg-gray-300">
                
                    <Link to='/myflix'>
                    <img src={myflix} alt="myflix" />
                    <div  className="flex flex-col justify-center items-center relative w-full h-full bottom-full overlay hover:bg-green-700">
                        
                    </div>
                        
                    </Link>
                </div> 

                <div className="col-auto bg-gray-300">
                    <Link to='/mettapp'>
                        <img src={meetapp} alt="meetapp" />
                        <div  className="flex relative w-full h-full bottom-full overlay hover:bg-green-700">
                        </div>
                        
                    </Link>
                </div> 

                <div className="col-auto bg-gray-300">
                    <Link to='/pokedex'>
                        <img src={pokedex} alt="pokedex" />
                        <div  className="flex relative w-full h-full bottom-full overlay hover:bg-green-700">
                        </div>
                    </Link>
                </div> 

                <div className="col-auto bg-gray-300">
                    <Link to='/portfolio'>
                        <img src={portfolio} alt="portfolio" />
                        <div  className="flex relative w-full h-full bottom-full overlay hover:bg-green-700">
                        </div>
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default Work