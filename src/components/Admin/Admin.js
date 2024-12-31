import React, { useState } from 'react';
import { setCompanies } from '../services/localStorageService';
import AddCompanyForm from './AddCompanyForm';

const Admin = () => {
  const [companies, setCompaniesList] = useState([]);

  const handleAddCompany = (company) => {
    const currentCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    currentCompanies.push(company);
    setCompanies(currentCompanies);
    setCompaniesList(currentCompanies);
  };

  return (
    <div className="admin-container">
      <h1>Admin Module</h1>
      <h2>Company Management</h2>
      <AddCompanyForm onSubmit={handleAddCompany} />
    </div>
  );
};

export default Admin;
