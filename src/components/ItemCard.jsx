import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="shadow-sm p-3 mb-3 rounded bg-white">
      <div className="row align-items-center text-center">
        <div className="col-md-2 fw-bold">{item.name}</div>
        <div className="col-md-2">{item.quantity}</div>
        <div className="col-md-2">{item.rate}</div>
        <div className="col-md-2">{item.tax}</div>
        <div className="col-md-2">{item.amount}</div>
      </div>
    </div>
  );
};

export default ItemCard;
