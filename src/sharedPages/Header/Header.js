import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { BsHandbag ,BsSearch } from 'react-icons/bs';
import { AuthContext } from '../../Contexts/AuthProvider';


const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate();
  //log out function
  const handleLogOut = () => {
    logout()
      .then(() => {
        navigate('/')
       })
    .catch(err=>console.error(err))
  }

  const menuItems = <>
  <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link className='font-semibold'>About</Link></li>
    <li><Link className='font-semibold'>Services</Link></li>
    {
      user?.uid ?
        <>
          <li onClick={handleLogOut}><Link className='font-semibold'>Logout</Link></li>
          <li><Link to='/services/checkout' className='font-semibold'>Check Out</Link></li>
        </>
        :
        <li><Link to='/login' className='font-semibold'>Login</Link></li>
    }
  </>
  return (
    <div className="navbar  py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
      <div className="navbar-end"> 
        <Link>
        <BsHandbag /></Link>
        <Link>
          <BsSearch className='mx-4' />
        </Link>
        <Link className='border border-orange-600  text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-2 px-4 rounded ml-2'>Appointment
    </Link>
  </div>
</div>
  );
};

export default Header;