import React from 'react';
import '../../index.css';

function ProjectDetails({ project, image }) {
	return (
		<div className='py-20 sm:px-20 md:px-48 mx-auto bg-red-100 '>
			<h1 className='my-10 font-bold text-5xl'>{project}</h1>
			<img src={image} alt={project} />
		</div>
	);
}

export default ProjectDetails;
