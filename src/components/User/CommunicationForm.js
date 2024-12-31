import React, { useState } from 'react';
import { updateCommunication } from '../../services/localStorageService';

const CommunicationForm = ({ companyId }) => {
  const [method, setMethod] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCommunication(companyId, method, date, notes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="LinkedIn Post">LinkedIn Post</option>
        <option value="Email">Email</option>
        <option value="Phone Call">Phone Call</option>
        {/* Add other communication methods */}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add Notes"
      />
      <button type="submit">Log Communication</button>
    </form>
  );
};

export default CommunicationForm;
