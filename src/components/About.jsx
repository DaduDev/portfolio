import React from 'react';
import '../App.css';
import { services } from '../constants';
import Footer from './Footer';
import { Image } from 'react-bootstrap';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>

      <div className='bg-black h-full flex-col w-full text-white sm:flex sm:justify-around about overflow-x-hidden' id='about'>
        <div className="flex flex-col min-h-[100dvh]">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <Image
                src="/Amogha.jpg"
                width="550"
                height="550"
                alt="Developer"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover" 
              />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Shaik Dadapeer</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hi, I'm a Computer Science student, with a passion for creating good web applications and captivating mobile applications. As a seasoned
                Software developer, I specialize in both React and React-Native. I have a strong foundation in web development and mobile application development.
                Beyond coding, I love sharing my insights and experiences through engaging blogs on <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://dadudev.hashnode.dev/" target='_blank'>Hashnode</a>, 
                where I delve into the intricacies of software development and technology trends.
                </p>
              <button onClick={() => {
                window.location.href = "https://drive.google.com/file/d/1cVI6X1N82dDUFCGKj-O7IMM-njAbxec1/view?usp=sharing"
              }} className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md">View Resume →</button>
              </div>
              
            </div>
          </section>
          
        </div>
        <div className=' flex justify-center flex-wrap gap-7 mb-10'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
  <Footer /></>
  );
}

export default About;