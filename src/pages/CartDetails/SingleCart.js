import React, { useEffect, useState } from "react";

const SingleCart = ({ order, handleDelete , handleOrderStatus}) => {
  const [orderedItem, setOrderedItem] = useState({});
  const { serviceId,name,phone,email,status } = order;
  const { title, img, price } = orderedItem;
  
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setOrderedItem(data));
  }, [serviceId]);

  
  return (
    <tr>
      <th>
        <label
          onClick={()=>handleDelete(serviceId)}
          title="Delete"
          className="bg-base-300 p-1 rounded cursor-pointer"
        >
          ❌
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-36 rounded h-36">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{title}</div>
            <div className="text-sm opacity-50">{email}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td className="font-semibold">
        {name}
        <br />
        <span className="badge badge-ghost badge-sm ">
          Phone : {phone}
        </span>
        
      </td>
      <td style={{ color: "#ff3811" }} className="font-semibold">
        Price : ${price}
      </td>
      <th>
        <div onClick={()=>handleOrderStatus(serviceId)}>
          {
           status?
               
              
              <button
          className=" py-1 px-3 text-green-600 border border-green-600 font-semibold  rounded"
        >
          {status}
              </button>
              :
              <button
          style={{ backgroundColor: "#ff3811" }}
          className="py-1 px-5 text-xl text-white font-semibold  rounded"
        >
          Pending
              </button>
          }
        </div>
       
      </th>
    </tr>
  );
};

export default SingleCart;
