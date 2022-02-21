import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Order from '../Order/Order';
import './Orders.scss'

function Orders(props) {
  console.log('LOCAL STORAGE AFTER ADDING CURRENCIES', localStorage)
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')))

  return (
    <>
    <div className="orders-class">
      <div style={{borderBottom: "2px solid black", display: "flex", flexDirection: "row", justifyContent: "space-evenly", 
      height: "35px", fontSize: "23px", paddingTop: "30px", color: "grey", fontWeight: "900"}}>
      <div>Side</div>
        <div>Price</div>
        <div>Instrument</div>
        <div>Volume</div>
        <div>Timestamp</div>
      </div>
      {orders ? orders.map((order) => <Order order={order} key={uuidv4()} />) : <p>no orders</p>}
    </div>
      {/* <button onClick={() => localStorage.clear()}>Clear</button> */}
    </>
  );
}

export default Orders;
