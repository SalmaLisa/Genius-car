import React from 'react';
import logo from '../../assets/logo.svg'
import { FaGoogle,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-20 bg-black text-white">
  <div className='pl-16'>
    <img src={logo} alt="" />
        <p className='mt-2'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
        <div className='flex'>
          <Link className='bg-slate-900 hover:bg-gray-700 p-2 mr-2 rounded-full'>
          <FaGoogle className=' text-xl'/>
          </Link>
          <Link className='bg-slate-900 hover:bg-gray-700 p-2 mx-2 rounded-full'>
          <FaTwitter className=' text-xl'/>
          </Link>
          <Link className='bg-slate-900 hover:bg-gray-700 p-2 mx-2 rounded-full'>
          <FaInstagram className=' text-xl'/>
          </Link>
          <Link className='bg-slate-900 hover:bg-gray-700 p-2 mx-2 rounded-full'>
          <FaLinkedin className=' text-xl'/>
          </Link>
          

        </div>
  </div> 
  <div className='pt-9'>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='pt-9'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='pt-9'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;