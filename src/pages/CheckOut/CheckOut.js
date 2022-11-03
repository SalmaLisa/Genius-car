import React from 'react';

const CheckOut = () => {
  return (
    <div>
      <form className='p-24 bg-base-200'>
        <div className='grid md:grid-cols-2 gap-6'>
        <input type="text" className='p-3 border text-xl rounded w-full' placeholder='First Name' />
        <input type="text" className='p-3 border text-xl rounded w-full' placeholder='Last Name' />
        <input type="text" className='p-3 border text-xl rounded w-full' placeholder='Your Phone' required/>
        <input type="email" className='p-3 border text-xl rounded w-full' placeholder='Email' />
        </div>
        <textarea className="textarea border border-gray-200 rounded w-full h-44 my-6 text-xl" placeholder="Your Message"></textarea>
        <button style={{backgroundColor:'#ff3811'}}  className="py-3 w-full text-white font-bold text-xl rounded">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckOut;