import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			const templateParams = {
				name: name,
				email: email,
				subject: subject,
				message: message,
			};
			const response = await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			);
			console.log(process.env.REACT_APP_SERVICE_ID);
			window.alert(response);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='py-20 sm:px-20 md:px-48 mx-auto bg-red-100 '>
			<h1 className='my-10 font-bold text-5xl'>
				Hey, drop me a line if you want to collaborate. 👋🏻
			</h1>
			<div className='flex flex-col justify-center'>
				<div>
					<span class='uppercase text-sm text-black font-bold'>Full Name</span>
					<input
						class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
						type='text'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div class='mt-8'>
					<span class='uppercase text-sm text-black font-bold'>Email</span>
					<input
						class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
						type='text'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div class='mt-8'>
					<span class='uppercase text-sm text-black font-bold'>Subject</span>
					<input
						class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
						type='text'
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
					/>
				</div>
				<div class='mt-8'>
					<span class='uppercase text-sm text-black font-bold'>Message</span>
					<textarea
						class='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}></textarea>
				</div>
				<div class='mt-8'>
					<button
						className=' 2xl:my-2 2xl:text-center 2xl:p-1 p-3  border-2 border-black rounded-md text-base hover:bg-green-500 hover:border-green-500 cursor-pointer hover:text-white'
						onClick={(e) => {
							handleClick(e);
						}}>
						Send Email
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
