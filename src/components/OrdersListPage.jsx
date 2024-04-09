// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const OrderListPage = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         setOrders(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="max-w-xl mx-auto my-20">
//       <h2 className="text-2xl font-bold mb-4">Orders</h2>
//       {orders.map((order) => (
//         <div key={order.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block mb-2 font-semibold">Description</label>
//             <p>{order.description}</p>
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Contact</label>
//             <p>{order.contact}</p>
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Pick-Up Location</label>
//             <p>{order.pickup_location}</p>
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Delivery Location</label>
//             <p>{order.delivery_location}</p>
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Delivery Time</label>
//             <p>{order.delivery_time}</p>
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Delivery Date</label>
//             <p>{order.delivery_date}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderListPage;