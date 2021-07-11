import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../../index.css';

function Work() {

    return (
        <div className="container pt-28 mx-5">
            <ul>  
                <li><Link to='/myflix'>MyFlix</Link></li>
                <li><Link to='/meetapp'>MeetApp</Link></li>
                <li><Link to='/pokedex'>Pokédex</Link></li>   
            </ul>
        </div>
    )
}

export default Work