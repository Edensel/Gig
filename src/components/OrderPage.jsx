

// src/components/OrderPage.jsx

import React, { useState } from 'react';

const OrderPage = () => {
    const [orderDetails, setOrderDetails] = useState({
        itemType: '',
        pickUpLocation: '',
        collectionTime: '',
        deliveryLocation: '',
        contactNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails({...orderDetails, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here is where you will change to send data to your server
        console.log(orderDetails);
        alert('Order placed successfully!');
    };

    return (
        <form className="space-y-4 max-w-xl mx-auto my-20" onSubmit={handleSubmit}>
            <div>
                <label className="block mb-2">Item Type</label>
                <input className="w-full p-2" type="text" name="itemType" value={orderDetails.itemType} onChange={handleChange} required />
            </div>
            <div>
                <label className="block mb-2">Pick-Up Location</label>
                <input className="w-full p-2" type="text" name="pickUpLocation" value={orderDetails.pickUpLocation} onChange={handleChange} required />
            </div>
            <div>
                <label className="block mb-2">Collection Time</label>
                <input className="w-full p-2" type="datetime-local" name="collectionTime" value={orderDetails.collectionTime} onChange={handleChange} required />
            </div>
            <div>
                <label className="block mb-2">Delivery Location</label>
                <input className="w-full p-2" type="text" name="deliveryLocation" value={orderDetails.deliveryLocation} onChange={handleChange} required />
            </div>
            <div>
                <label className="block mb-2">Contact Number</label>
                <input className="w-full p-2" type="tel" name="contactNumber" value={orderDetails.contactNumber} onChange={handleChange} required />
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Place Order
            </button>
        </form>
    );
};

export default OrderPage;
