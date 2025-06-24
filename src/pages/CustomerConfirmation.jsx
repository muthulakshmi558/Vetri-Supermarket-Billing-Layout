import React, { useEffect, useState } from 'react';
import successImage from '../assets/images/completed.png'; 
import { useNavigate } from 'react-router-dom';


const CustomerConfirmation = () => {
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    orderId: '',
  });
 const navigate = useNavigate();
  useEffect(() => {
    const stored = localStorage.getItem('customerDetails');
    if (stored) {
      const data = JSON.parse(stored);
      setCustomer({
        name: data.name || '',
        phone: data.phone || '',
        email: data.email || '',
        orderId: data.orderId || Math.floor(Math.random() * 1000), // fallback
      });
    }
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <img src={successImage} alt="Success" style={{ width: '150px', marginBottom: '20px' }} />
      <h2 className="fw-bold text-center">Your Order Completed</h2>
      <p className="text-center mb-4">Thank you. Your order has been received</p>

      <div className="table-responsive" style={{ background: '#d7f5dc', borderRadius: '10px', padding: '20px', width: '100%', maxWidth: '700px' }}>
        <table className="table table-borderless mb-0">
          <thead>
            <tr className="fw-bold text-dark">
              <th>Order ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email I’d</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customer.orderId}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email || 'Not Provided'}</td>
              <td>
                <button
                className="btn btn-warning btn-sm fw-bold"
                onClick={() => navigate('/invoice')}>
                Download Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerConfirmation;
