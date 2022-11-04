import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const order = {
      serviceId: _id,
      name,
      phone,
      email,
      message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your order is successfully placed");
          console.log(data);
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold">
          Service : <span style={{ color: "#ff3811" }}>{title}</span>
        </h1>
        <p className="text-3xl font-bold my-4">Price : ${price}</p>
      </div>
      <form onSubmit={handleOrderSubmit} className="p-24 bg-base-200 rounded">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="firstName"
            type="text"
            className="p-3 border text-xl rounded w-full"
            placeholder="First Name"
          />
          <input
            name="lastName"
            type="text"
            className="p-3 border text-xl rounded w-full"
            placeholder="Last Name"
          />
          <input
            name="phone"
            type="text"
            className="p-3 border text-xl rounded w-full"
            placeholder="Your Phone"
            required
          />
          <input
            name="email"
            type="email"
            className="p-3 border text-xl rounded w-full"
            placeholder={`${user.email}`}
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea border border-gray-200 rounded w-full h-44 my-6 text-xl"
          placeholder="Your Message"
        ></textarea>
        <button
          style={{ backgroundColor: "#ff3811" }}
          className="py-3 w-full text-white font-bold text-xl rounded"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
