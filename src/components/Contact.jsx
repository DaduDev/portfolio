import React from "react";
import { useForm } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
const Contact = () => {
	const [state, handleSubmit] = useForm("xdknbgve");
	if (state.succeeded) {
		return (
			<div className="flex justify-center items-center mt-20">Thank you for your response, we will reach you out soon</div>
		);
	}


	return (

        <div className=' bg-black'>   
			<div className='text-white contact overflow-x-hidden ' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl' >
					<p className='font-light'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
					<form
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								placeholder="Enter your name"
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								placeholder="Ex:abc@gmail.com"
								className='py-4 px-6 rounded-lg  font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								placeholder='Do you have anything to say?'
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>

						<button
							disabled={state.submitting}
							type='submit'
							className=' p-4 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900'
						>
							Send
						</button>
					</form>
				</div>
			</div>
		<Footer/>
        </div>
	);
};

export default Contact;