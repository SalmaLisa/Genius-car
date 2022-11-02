import React from 'react';
import team from '../../../../assets/icons/group.svg'
import delivery from '../../../../assets/icons/Group 38729.svg'
import delivery2 from '../../../../assets/icons/deliveryt.svg'
import support from '../../../../assets/icons/person.svg'
import equipment from '../../../../assets/icons/Wrench.svg'
import guarantee from '../../../../assets/icons/check.svg'

const Features = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-orange-600 text-2xl mt-12 mb-2 font-bold">
        Core Features
        </p>
        <h1 className="text-5xl font-bold">Why Choose Us</h1>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
      </div>
      <div className='flex justify-between py-12'>
        <div className='text-center border w-44 py-6 rounded-xl'>
          <img className='mx-auto mb-3'  src={team} alt="" />
          <p className='font-bold text-gray-700 text-xl'>Expart Team</p>
        </div>
        <div style={{backgroundColor:'#ff3811'}} className='text-center border w-44 py-6 rounded-xl '>
          <img className='mx-auto mb-3'  src={delivery} alt="" />
          <p className='font-bold text-white text-xl'>Timely Delivery</p>
        </div>
        <div className='text-center border w-44 py-6 rounded-xl'>
          <img className='mx-auto mb-3'  src={support} alt="" />
          <p className='font-bold text-gray-700 text-xl'>24/7 Support</p>
        </div>
        <div className='text-center border w-44 py-6 rounded-xl'>
          <img className='mx-auto mb-3'  src={equipment} alt="" />
          <p className='font-bold text-gray-700 text-xl'>Best Equipment</p>
        </div>
        <div className='text-center border w-44 py-6 rounded-xl'>
          <img className='mx-auto mb-3'  src={guarantee} alt="" />
          <p className='font-bold text-gray-700 text-xl'>100% Guarantee</p>
        </div>
        <div className='text-center border w-44 py-6 rounded-xl'>
          <img className='mx-auto mb-3'  src={delivery2} alt="" />
          <p className='font-bold text-gray-700 text-xl'>Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Features;