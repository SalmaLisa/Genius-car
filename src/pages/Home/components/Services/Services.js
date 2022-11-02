import React, { useEffect, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-orange-600 text-2xl mt-12 mb-2 font-bold">
          Services
        </p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable
        </p>
      </div>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10 pb-32 pt-12">
        {services.map((service) => {
          return (
            <div
              key={service._id}
              className="card  bg-base-100 shadow-xl border "
            >
              <div className="h-2/3 pt-6 px-6">
                <img
                  src={service.img}
                  className="h-full rounded-xl"
                  alt="Shoes"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title text-2xl">{service.title}</h2>
                <div className="card-actions justify-end items-center">
                  <p className="text-xl text-orange-600 font-semibold">
                    Price : ${service.price}
                  </p>
                  <Link className="text-orange-600 text-2xl">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="w-full text-center mb-20 ">
                <Link className="border border-orange-600  text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-4 px-6 rounded text-xl">
                  More Services
                </Link>
              </div>
    </div>
  );
};

export default Services;
