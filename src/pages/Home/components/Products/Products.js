import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div>
      <div>
      <div className="text-center">
        <p className="text-orange-600 text-2xl mt-12 mb-2 font-bold">
        Popular Products
        </p>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
      </div>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10 pb-32 pt-12">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="card bg-base-100 shadow-xl border "
            >
              <div className="h-3/5 pt-6 px-6">
                <img
                  src={product.img}
                  className="h-full w-full bg-base-200 rounded-xl"
                  alt="Shoes"
                />
              </div>
              <div className="card-body text-center items-center pb-0">
                <div className='flex'>
                <AiFillStar className='text-3xl text-orange-500'/>
                <AiFillStar className='text-3xl text-orange-500'/>
                <AiFillStar className='text-3xl text-orange-500'/>
                <AiFillStar className='text-3xl text-orange-500'/>
                <AiFillStar className='text-3xl text-orange-500'/>
                </div>
                <h2 className="card-title text-2xl font-bold my-1">{product.name}</h2>
                <div className="card-actions justify-end items-center">
                  <p className="text-xl text-orange-600 font-semibold ">
                    Price : {product.price}
                  </p>
                </div>
              </div> 
            </div>
          );
        })}
      </div>
      <div className="w-full text-center mb-20 ">
                <Link className="border border-orange-600  text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-4 px-6 rounded text-xl">
                  More Products
                </Link>
              </div>
    </div>
    </div>
  );
};

export default Products;
