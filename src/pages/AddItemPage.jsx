import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const initialItems = [
  { id: 1, name: 'Dairy Milk', qty: 2, rate: 100, tax: 20 },
  { id: 2, name: 'Millet Noodles (1kg)', qty: 1, rate: 30, tax: 10 },
  { id: 3, name: 'Wheat Flour', qty: 2, rate: 100, tax: 20 },
  { id: 4, name: 'Maida (1kg)', qty: 1, rate: 30, tax: 10 },
  { id: 5, name: 'Chili Powder', qty: 2, rate: 100, tax: 20 },
  { id: 6, name: 'Biryani Masala (1kg)', qty: 1, rate: 30, tax: 10 },
];

const AddItemPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialItems);

  const updateQty = (id, type) => {
    const updated = products.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: type === 'inc' ? item.qty + 1 : Math.max(1, item.qty - 1),
          }
        : item
    );
    setProducts(updated);
  };

  const calculateAmount = (item) => {
    return item.qty * item.rate + item.tax;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 p-0 d-none d-md-block" style={{ backgroundColor: '#d6eaff', minHeight: '100vh' }}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-12 p-4 d-flex flex-column align-items-center">
          <h3 className="fw-bold mb-4">Products</h3>

          {/* Header */}
          <div className="table-responsive mb-3" style={{ maxWidth: '700px', width: '100%' }}>
            <table className="table table-bordered text-center mb-0">
              <thead>
                <tr style={{ color: '#3f00ff' }}>
                  <th>ITEM DETAILS</th>
                  <th>QUANTITY</th>
                  <th>RATE</th>
                  <th>TAX</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Product Cards */}
          <div className="w-100" style={{ maxWidth: '700px' }}>
            {products.map((item) => (
              <div
                className="shadow-sm bg-white rounded d-flex align-items-center justify-content-between px-3 py-2 mb-2"
                key={item.id}
                style={{ fontSize: '0.9rem' }}
              >
                <div style={{ flex: 2 }}>{item.name}</div>

                <div style={{ flex: 2 }}>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-sm border-primary text-primary rounded-circle me-2"
                      style={{ width: '25px', height: '25px', fontSize: '0.7rem' }}
                      onClick={() => updateQty(item.id, 'dec')}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="btn btn-sm border-primary text-primary rounded-circle ms-2"
                      style={{ width: '25px', height: '25px', fontSize: '0.7rem' }}
                      onClick={() => updateQty(item.id, 'inc')}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div style={{ flex: 1 }} className="text-center">{item.rate}</div>
                <div style={{ flex: 1 }} className="text-center">{item.tax}</div>
                <div style={{ flex: 1 }} className="text-center">{calculateAmount(item)}</div>

                <div style={{ flex: 0.5 }} className="text-end">
                  <button className="btn btn-sm rounded-circle" style={{ backgroundColor: '#ff914d', color: 'white' }}>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="text-center mt-4">
            <button
              className="btn fw-bold"
              style={{
                backgroundColor: '#ff914d',
                color: '#000',
                padding: '8px 30px',
                borderRadius: '6px',
              }}
              onClick={() => navigate('/bill-summary')}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
