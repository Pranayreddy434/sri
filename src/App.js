import React from 'react';
import Dashboard from './components/User/Dashboard';
import CalendarView from './components/User/CalendarView';
import Reporting from './components/Reporting/Reporting';
import Admin from './components/Admin/Admin';

const App = () => {
  return (
    <div className="app">
      <h1>Calendar Communication Tracking</h1>
      <Admin />
      <Dashboard />
      <CalendarView />
      <Reporting />
    </div>
  );
};

export default App;
