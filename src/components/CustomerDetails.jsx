// components/CustomerDetails.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CustomerDetails = () => {
  return (
    <div className="customer-details mb-4">
      <h5 className="fw-bold">Customer Details</h5>

      <div className="row align-items-center border-bottom py-2">
        <div className="col-6 col-md-6">
          <small className="text-muted">CUSTOMER NAME:</small>
          <div className="fw-semibold">Priya</div>
        </div>
        <div className="col-5 col-md-5">
          <small className="text-muted">CONTACT NO:</small>
          <div className="fw-semibold">8910866713</div>
        </div>
        <div className="col-1 text-end">
          <FaEdit className="text-primary" style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div className="row align-items-center border-bottom py-2">
        <div className="col-6 col-md-6">
          <small className="text-muted">ADDRESS:</small>
          <div className="fw-semibold">12, Cross Cut Road, Chennai.</div>
        </div>
        <div className="col-5 col-md-5">
          <small className="text-muted">DATE:</small>
          <div className="fw-semibold">12/7/24</div>
        </div>
        <div className="col-1 text-end">
          <FaTrash className="text-primary" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
