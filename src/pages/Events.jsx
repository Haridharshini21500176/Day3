import React, { useState, useEffect } from 'react';
import './Events.css';
import event1 from '../assets/e1.jpg';
import event2 from '../assets/e2.jpg';
import event3 from '../assets/e3.png';
import event4 from '../assets/e4.jpg';

const events = [
  { name: 'Science Fair 2024', image: event1, description: 'A showcase of the latest scientific discoveries and projects by students.' },
  { name: 'Art Exhibition', image: event2, description: 'A display of the finest art from upcoming artists.' },
  { name: 'Sports Day', image: event3, description: 'An exciting day of sports activities and competitions.' },
  { name: 'Music Fest', image: event4, description: 'A weekend filled with music from top bands and artists.' },
];

const Events = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // Change event every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="events-container">
      {events.map((event, index) => (
        <div className={`event-card ${index === currentEventIndex ? 'active' : ''}`} key={index}>
          <img src={event.image} alt={event.name} />
          <h2>{event.name}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
