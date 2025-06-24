// components/Sidebar.jsx
import React from 'react';
import { FaHome, FaThList } from 'react-icons/fa';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3">
      <div className="text-center mb-4">
        <img
          src="https://source.unsplash.com/50x50/?grocery"
          alt="Profile"
          className="rounded-circle mb-2"
        />
        <h5 className="mb-0">Vetri Market</h5>
      </div>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <a href="#" className="nav-link active">
              <FaHome className="me-2" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaThList className="me-2" /> Products
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
