import React from 'react';
import Footer from './Footer';



const Experience = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-20 pb-40 overflow-x-hidden' id='experience'>
      <h1 className='text-4xl font-bold text-center text-white pt-8'>Skills</h1>
      <div className='flex flex-row justify-between pt-20 pl-5 pr-5'>
      <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
          <div className="p-4 sm:p-6">
              <a href="#">
                  <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">Programming Languages</h5>
              </a>
              <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>SQL</li>
                </ul>
              </p>
          </div>
        </div>
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
          <div className="p-4 sm:p-6">
              <a href="#">
                  <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">Development</h5>
              </a>
              <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>React-Native</li>
                  <li>Tailwind-CSS</li>
                </ul>
              </p>
          </div>
        </div>
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
          <div className="p-4 sm:p-6">
              <a href="#">
                  <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">Tools</h5>
              </a>
              <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                <ul>
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Vercel</li>
                </ul>
              </p>
          </div>
        </div>
      </div>
      <div className='bg-black p-10'></div>
      <Footer/>
    </div>
  )
}

export default Experience;
