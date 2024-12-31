import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default CalendarView;
