import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Cart = () => {
  const { cart, cartLoading, cartError } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderItems = (item, idx) => {
    const { title, id, count, total } = item;
    return (
      <tr key={`item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button>something</button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h1>Your order</h1>
   <div  className={cartError ? "errorOnCart" : ''}>  {cartError ? cartError : null}</div> 
      {cartLoading ? (
        <div class="spin-wrapper">
          <div class="spinner"></div>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{cart?.map(renderItems)}</tbody>
        </Table>
      )}
    </div>
  );
};

export default Cart;
