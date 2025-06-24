import React from 'react';
import Sidebar from '../components/Sidebar';
import CustomerDetails from '../components/CustomerDetails';
import SearchBar from '../components/SearchBar';
import ItemTable from '../components/ItemTable';
import ItemCard from '../components/ItemCard';

const BillingPage = () => {
  const items = [
    { name: 'Noodles', quantity: '2', rate: 100, tax: 20, amount: 120 },
    { name: 'Carrot', quantity: '1kg', rate: 30, tax: 10, amount: 40 },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="billing-content p-4 w-100">
        <CustomerDetails />
        <SearchBar />
        <ItemTable />
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
        <div className="text-center mt-4">
          <button className="btn btn-primary px-5">Next</button>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
