import React from 'react';
import './BannerItems.css'
import { HiOutlineArrowLeft,HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BannerItems = ({ info }) => {
  const {id,prev,next, img } = info;
  return (
   
  
    
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='relative carousel-img-container'>
      <img className='rounded-xl' src={img} alt=""/>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3 ">
        <h1 className='text-6xl font-bold text-white mt-10'>Affordable <br /> Price For Car <br /> Servicing</h1> 
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 ">
      <p className='text-white pt-32' >There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4 ">
      <Link style={{backgroundColor:'#ff3811'}} className='text-xl text-white font-semibold py-3 px-8 rounded'>Discover More
    </Link>
      <Link className='text-xl border text-white font-semibold py-3 px-6 rounded ml-5'>Latest Project
    </Link>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle opacity-90"><HiOutlineArrowLeft className='text-xl'></HiOutlineArrowLeft></a> 
        <a style={{backgroundColor:'#ff3811'}} href={`#slide${next}`} className=" btn btn-circle  ml-5 mr-10"><HiOutlineArrowRight className='text-xl'></HiOutlineArrowRight></a>
      </div>
    </div> 

 
  );
};

export default BannerItems;