import React, { useState, useEffect } from 'react';
import { getCompanies, getCommunications } from '../services/localStorageService';

const Dashboard = () => {
  const [companies, setCompaniesList] = useState([]);
  const [communications, setCommunicationsList] = useState([]);

  useEffect(() => {
    setCompaniesList(getCompanies());
    setCommunicationsList(getCommunications());
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>
                {communications
                  .filter((com) => com.companyId === company.id)
                  .slice(-5)
                  .map((com) => (
                    <div key={com.id}>
                      {com.method} - {com.date}
                    </div>
                  ))}
              </td>
              <td>{/* Next scheduled communication logic */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
