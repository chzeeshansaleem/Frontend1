import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../useContext/UserContext";
const Myorderuser = () => {
  const { userId, setUserId } = useContext(Authcontext);
  const [order, setorder] = useState([]);

  useEffect(() => {
    const res = axios.get("http://localhost:4000/order").then((res) => {
      setorder(res.data);
      console.log(order);
      console.log(userId);
    });
  }, []);

  return (
    <div style={{ marginTop: "20vh" }}>
      <h1>My Orders</h1>
      <table className="table">
        <thead>
          <td>order No</td>
          <td>Order Date</td>
          <td>Customer Name</td>
          <td>Total Price</td>
          <td>Status</td>
        </thead>
        {order.map((item) => {
          if (userId._id === item.userId) {
            return (
              <tr>
                <td>{item.orderId}</td>
                <td>{item.orderDate}</td>
                <td>{userId.name}</td>
                <td>{item.totalPrice}</td>
                <td>{item.status}</td>
              </tr>
            );
          }
          return null; // return null if the condition is not met
        })}
      </table>
    </div>
  );
};

export default Myorderuser;
