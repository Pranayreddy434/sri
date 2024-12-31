import React, { useState } from 'react';

const AddCompanyForm = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyLinkedIn, setCompanyLinkedIn] = useState('');
  const [companyEmails, setCompanyEmails] = useState('');
  const [companyPhoneNumbers, setCompanyPhoneNumbers] = useState('');
  const [companyComments, setCompanyComments] = useState('');
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState('2 weeks');

  const handleSubmit = (e) => {
    e.preventDefault();
    const company = {
      id: Date.now(),
      name: companyName,
      location: companyLocation,
      linkedIn: companyLinkedIn,
      emails: companyEmails.split(','),
      phoneNumbers: companyPhoneNumbers.split(','),
      comments: companyComments,
      communicationPeriodicity,
    };
    onSubmit(company);
    setCompanyName('');
    setCompanyLocation('');
    setCompanyLinkedIn('');
    setCompanyEmails('');
    setCompanyPhoneNumbers('');
    setCompanyComments('');
    setCommunicationPeriodicity('2 weeks');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Company Name"
        required
      />
      <input
        type="text"
        value={companyLocation}
        onChange={(e) => setCompanyLocation(e.target.value)}
        placeholder="Location"
        required
      />
      <input
        type="url"
        value={companyLinkedIn}
        onChange={(e) => setCompanyLinkedIn(e.target.value)}
        placeholder="LinkedIn Profile"
      />
      <input
        type="email"
        value={companyEmails}
        onChange={(e) => setCompanyEmails(e.target.value)}
        placeholder="Emails (comma-separated)"
      />
      <input
        type="text"
        value={companyPhoneNumbers}
        onChange={(e) => setCompanyPhoneNumbers(e.target.value)}
        placeholder="Phone Numbers (comma-separated)"
      />
      <textarea
        value={companyComments}
        onChange={(e) => setCompanyComments(e.target.value)}
        placeholder="Comments"
      />
      <select
        value={communicationPeriodicity}
        onChange={(e) => setCommunicationPeriodicity(e.target.value)}
      >
        <option value="2 weeks">Every 2 weeks</option>
        <option value="1 month">Every 1 month</option>
        <option value="1 week">Every 1 week</option>
      </select>
      <button type="submit">Add Company</button>
    </form>
  );
};

export default AddCompanyForm;
