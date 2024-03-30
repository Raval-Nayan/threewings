import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch event and holiday data from the API
    fetch('http://instimattress.thethreewings.com/api/getEventHoliday')
      .then(response => response.json())
      .then(data => {
        if (data && data.data) {
          setEvents(data.data);
        } else {
          setError('Invalid data format');
        }
      })
      .catch(error => setError('Error fetching events and holidays: ' + error));
  }, []);

  const renderDay = ({ date }) => {
    // Check if the date matches any events or holidays
    const event = events.find(event => {
      try {
        // Parse event start date and compare with the current date
        const eventStartDate = new Date(event.start_date);
        // Compare year, month, and day components
        return (
          eventStartDate.getFullYear() === date.getFullYear() &&
          eventStartDate.getMonth() === date.getMonth() &&
          eventStartDate.getDate() === date.getDate()
        );
      } catch (error) {
        console.error('Error parsing date:', error);
        setError('Error parsing date: ' + error.message);
        return false; // Treat invalid dates as not matching
      }
    });

    // Render custom content for days with events or holidays
    if (event) {
      return (
        <div className="event">
         
          <span>{event.event_name}</span>
       
        </div>
      );
    }

    // Default rendering for days without events or holidays
    return null;
  };

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className=" calendar-container border">
      {error && <div className="error">{error}</div>}
      <Calendar
      
        className="calendar w-100 react-calender "
        onChange={onChange}
        value={date}
        tileContent={renderDay}
      />
    </div>
  );
}

export default MyCalendar;
