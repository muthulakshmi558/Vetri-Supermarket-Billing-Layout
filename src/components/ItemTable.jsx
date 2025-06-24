import React from 'react';

const ItemTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead>
          <tr style={{ color: 'blue', border: '1px solid black' }}>
            <th>ITEM DETAILS</th>
            <th>QUANTITY</th>
            <th>RATE</th>
            <th>TAX</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ItemTable;
