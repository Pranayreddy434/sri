export const getCompanies = () => {
  // Fetch companies from local storage or return an empty array
  return JSON.parse(localStorage.getItem('companies')) || [];
};

export const getCommunications = () => {
  // Fetch communications from local storage or return an empty array
  return JSON.parse(localStorage.getItem('communications')) || [];
};

export const updateCommunication = (companyId, method, date, notes) => {
  // Add a communication to the local storage for the given companyId
  const communications = getCommunications();
  const newCommunication = {
    id: Date.now(),
    companyId,
    method,
    date,
    notes,
  };
  communications.push(newCommunication);
  localStorage.setItem('communications', JSON.stringify(communications));
};
