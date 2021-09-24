import React from 'react';
import '../../index.css';

function ProjectDetails({ project, image, text }) {
	return (
		<div className='pt-10 bg-red-100'>
			<div className='grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 py-20 mx-auto '>
				<h1 className='col-span-2 px-5 font-bold text-5xl pb-3'>{project}</h1>
				<img
					className='col-span-2 transform duration-500 hover:-translate-y-2'
					src={image}
					alt={project}
				/>
				<div className='col-span-1 bg-gray-100 min-h-full mr-8 rounded-md shadow-xl transform duration-500 hover:-translate-y-2'>
					<div className='p-5'>{text}</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
