import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


const BillSummaryPage = () => {
  const [paymentType, setPaymentType] = useState('CASH');
  const [receivedAmount, setReceivedAmount] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cartItems');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts([
        { name: 'Dairy Milk', qty: 2, rate: 50, tax: 10 },
        { name: 'Millet Noodles', qty: 1, rate: 30, tax: 5 },
      ]);
    }
  }, []);

  const subTotal = products.reduce((sum, p) => sum + p.qty * p.rate, 0);
  const tax = products.reduce((sum, p) => sum + p.tax, 0);
  const roundOff = 0;
  const total = subTotal + tax + roundOff;
  const balance = receivedAmount ? (receivedAmount - total).toFixed(2) : 0;

  const getDate = () => new Date().toLocaleDateString('en-IN');
  const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const navigate = useNavigate();


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 p-0 d-none d-md-block" style={{ backgroundColor: '#d6eaff', minHeight: '100vh' }}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-12 d-flex justify-content-center align-items-start py-4">
          <div
            className="p-4 rounded shadow-sm"
            style={{ width: '100%', maxWidth: '450px', backgroundColor: '#fff' }}
          >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="mb-1"><strong>DATE:</strong> {getDate()}</p>
                <p className="mb-1"><strong>TIME:</strong> {getTime()}</p>
                <p className="mb-1"><strong>BILL NO:</strong> 78123</p>
              </div>
              <button className="btn btn-sm btn-primary mt-1">📄 Draft</button>
            </div>

            {/* Amounts Summary */}
            <div className="d-flex justify-content-between mb-3">
              <div className="px-3 py-2 rounded text-center" style={{ backgroundColor: '#ff914d', width: '48%' }}>
                <div style={{ fontSize: '0.9rem' }}>Collected Amount</div>
                <div className="fw-bold">{subTotal}</div>
              </div>
              <div className="px-3 py-2 rounded text-center" style={{ backgroundColor: '#f2b5fc', width: '48%' }}>
                <div style={{ fontSize: '0.9rem' }}>Balance</div>
                <div className="fw-bold">{balance}</div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <button
                className={`btn btn-sm ${paymentType === 'CASH' ? 'btn-dark' : 'btn-outline-secondary'}`}
                onClick={() => setPaymentType('CASH')}
              >
                💵 CASH
              </button>

              <button
                className={`btn btn-sm ${paymentType === 'CARD' ? 'btn-dark' : 'btn-outline-secondary'}`}
                onClick={() => setPaymentType('CARD')}
              >
                💳 CARD
              </button>

              <input
                type="number"
                placeholder="Amount"
                className="form-control form-control-sm"
                style={{ width: '100px' }}
                value={receivedAmount}
                onChange={(e) => setReceivedAmount(parseFloat(e.target.value) || '')}
              />
            </div>

            {/* Bill Summary */}
            <hr />
            <div className="d-flex justify-content-between">
              <span>Sub Total</span>
              <span>{subTotal}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tax</span>
              <span>{tax}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Round Off</span>
              <span>{roundOff}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>{total}</span>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-warning px-4">Save</button>
             <button
                        className="btn btn-primary px-4"
                        onClick={() => navigate('/confirmation')}>
                            Payment
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillSummaryPage;
