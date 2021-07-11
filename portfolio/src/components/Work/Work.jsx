import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../../index.css';
import myflix from './macbook.png'


function Work() {

    return (
        <div className="container pt-28 mx-5">
            
            <ul>  
                <li>
                    <Link to='/myflix'>
                        <img src={myflix} alt="myflix" />
                    </Link>
                </li>
                <li><Link to='/meetapp'>MeetApp</Link></li>
                <li><Link to='/pokedex'>Pokédex</Link></li>   
            </ul>
        </div>
    )
}

export default Work