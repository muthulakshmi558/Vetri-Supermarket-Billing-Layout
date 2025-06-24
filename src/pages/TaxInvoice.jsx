import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaxInvoice = () => {
  const navigate = useNavigate();

  // Mock data
  const order = {
    invoiceNo: 'HY678953789',
    orderId: '07896311890',
    date: '20-05-25',
    customer: {
      name: 'Keerthi',
      phone: '8900278569',
      address: '78 A, Guru Apartment, Sholinganallur, Chennai - 600119',
    },
    items: [
      { name: 'Noodles', qty: '2', price: 120 },
      { name: 'Carrot', qty: '1 kg', price: 40 },
    ],
  };
  
  const totalAmount = order.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container py-4" style={{ maxWidth: '700px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-center fw-bold m-0" style={{ flex: 1, textAlign: 'center' }}>Tax Invoice</h4>
        <div
          className="border rounded px-3 py-2"
          style={{
            fontSize: '0.9rem',
            backgroundColor: '#f8f9fa',
            borderColor: '#ccc',
            marginLeft: 'auto'
          }}
        >
          <strong>Invoice Number #</strong> {order.invoiceNo}
        </div>
      </div>

      <p className="mb-1">
        <strong>Sold By:</strong> <span style={{ color: 'orangered' }}>Vetri Market</span>
      </p>
      <p className="mb-1">
        <strong>Ship-From Address:</strong><br />
        65, Old Market, Sivagurunathapuram, Surandai, Tamil Nadu 627-859
      </p>

      <hr />

      <div className="row">
        <div className="col-md-6">
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Order Date:</strong> {order.date}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Billing Address:</strong><br />
            {order.customer.name}<br />
            {order.customer.address}<br />
            Phone - {order.customer.phone}
          </p>
        </div>
      </div>

      <table className="table table-bordered mt-3">
        <thead className="table-success text-center">
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {order.items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-end fw-bold fs-5">Total ₹ {totalAmount}.00</div>

      <div className="text-center mt-4">
        <button
          className="btn btn-warning px-4"
          onClick={() => navigate('/thankyou')}
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default TaxInvoice;
