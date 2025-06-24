import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillingPage from './pages/BillingPage';
import AddItemPage from './pages/AddItemPage';
import BillSummaryPage from './pages/BillSummaryPage';
import CustomerConfirmation from './pages/CustomerConfirmation';
import TaxInvoice from './pages/TaxInvoice'; // ✅ Add this line
import { useNavigate } from 'react-router-dom'; // 👈 add this at top
import ThankYouPage from './pages/ThankYouPage';


import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BillingPage />} />
      <Route path="/add-item" element={<AddItemPage />} />
      <Route path="/bill-summary" element={<BillSummaryPage />} />
      <Route path="/confirmation" element={<CustomerConfirmation />} />
      <Route path="/invoice" element={<TaxInvoice />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
    </Routes>
  </Router>
);

export default App;
