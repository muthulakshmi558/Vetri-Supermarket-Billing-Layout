import React from 'react';
import { FaSearch, FaMicrophone, FaBarcode, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const goToAddItem = () => {
    navigate('/add-item');
  };

  return (
    <div className="d-flex align-items-center mb-4 gap-2">
      <div className="input-group shadow-sm rounded bg-white" style={{ flex: 1 }}>
        <span className="input-group-text bg-white border-0">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search"
        />
        <span className="input-group-text bg-white border-0">
          <FaBarcode className="me-2" />
          <FaMicrophone />
        </span>
      </div>
      <button className="btn btn-warning d-flex align-items-center" onClick={goToAddItem}>
        <FaPlus className="me-1" /> Add Item
      </button>
    </div>
  );
};

export default SearchBar;
