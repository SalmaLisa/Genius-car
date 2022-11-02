import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="hero py-32">
  <div className="hero-content flex-col lg:flex-row">
        <div className='w-1/2 relative'>
          <div style={{height:"430px"}}  className=''>
          <img src={person} className=" w-4/5 h-full rounded-lg shadow-2xl" alt="" />
        </div>
          <div style={{height:"280px"}} className="w-3/5 rounded-xl shadow-2xl absolute right-8 top-56 p-3 bg-white">
          <img src={parts}className="h-full " alt="" />
        </div>
    </div>
        <div className='w-1/2'>
          <p className="text-orange-600 text-2xl  mb-2 font-bold">About Us</p>
      <h1 className="text-5xl font-bold leading-tight">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="pb-12">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <Link style={{backgroundColor:'#ff3811'}} className='text-white font-semibold py-4 px-8 rounded'>Get More Info
    </Link>
    </div>
  </div>
</div>
  );
};

export default About;