import { contains } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import SingleCart from './SingleCart';

const CartDetails = () => {
  const { user } = useContext(AuthContext)
  const [orders,setOrders]=useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user])
    

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure to delete this item ?')
    if (proceed) {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          const restOrders = orders.filter(order => order.serviceId !== id)
          setOrders(restOrders)
      }
    })
  }
  }

  const handleOrderStatus = id => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify({status:"Approved"})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const pendingItems = orders.filter(odr =>odr.serviceId!==id)
          const approvedItem = orders.find(odr => odr.serviceId === id)
          approvedItem.status="Approved"
          const sortedOrders = [approvedItem, ...pendingItems]
          setOrders(sortedOrders)
      }
      })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
          <tbody>
            {
              orders.map(order => <SingleCart key={order._id} order={order} handleDelete={handleDelete} handleOrderStatus={handleOrderStatus}></SingleCart>)
            }
      
    </tbody>
  
    
  </table>
</div>
    </div>
  );
};

export default CartDetails;