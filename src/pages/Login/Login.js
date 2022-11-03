import React from 'react';
import login from '../../assets/images/login/login.svg'
import facebook from '../../assets/images/login/Facebook.png'
import linkedin from '../../assets/images/login/linkedin.png'
import google from '../../assets/images/login/Google.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="hero w-full">
  <div className="hero-content w-full flex-col lg:flex-row">
        
        <img src={login} alt="" />
    
    <div className="card w-full border ml-36 py-16">
          <div className="card-body">
            <h1 className='text-5xl font-bold text-center'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="text" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="text" placeholder="Your Password" className="input input-bordered" />
          <label className="label">
            <Link className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div  className="form-control mt-6">
          <button style={{backgroundColor:'#ff3811'}}  className="py-3 text-white font-bold text-xl rounded">Login</button>
            </div>
            <div className='text-center'>
              <p className='my-4 text-xl'>or Sign In With</p>
              <div className='flex justify-center'>
                <Link><img src={facebook} className="mr-3" alt="" /></Link>
                <Link><img src={linkedin} className="mr-3" alt="" /></Link>
                <Link><img src={google} className="mr-3" alt="" /></Link> 
              </div>
              <p>New to Genius Car ? <Link to='/signup' style={{color:'#ff3811'}} className='font-semibold mt-8 inline-block'>Sign Up</Link></p>
            </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;