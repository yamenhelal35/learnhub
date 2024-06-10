import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "../../components/StickyComponent/Side Bar/Sidebar";

function Calendar() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    details: "",
    date: ""
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from backend
    axios.get('http://localhost:6000/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: eventData.title,
      details: eventData.details,
      start: eventData.date,
      end: eventData.date
    };

    axios.post('http://localhost:6000/events', newEvent)
      .then(response => {
        setEvents((prevEvents) => [...prevEvents, response.data]);
        setShowEventForm(false);
      })
      .catch(error => {
        console.error('There was an error saving the event!', error);
      });
  };

  const handleEventClick = (eventClickInfo) => {
    setSelectedEvent(eventClickInfo.event);
  };

  const handleCloseEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="ml-64">
        <button
          className="bg-gray-900 text-white py-2 px-4 rounded mb-9"
          onClick={() => setShowEventForm(true)}
        >
          Add Event
        </button>
        {showEventForm && (
          <div className="mb-41">
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleInputChange}
              placeholder="Event Title"
              className="bg-gray-900 text-white py-2 px-4 rounded mb-20"
            />
            <input
              type="text"
              name="details"
              value={eventData.details}
              onChange={handleInputChange}
              placeholder="Event Details"
              className="bg-gray-900 text-white py-2 px-4 rounded mb-2"
            />
            <input
              type="datetime-local"
              name="date"
              value={eventData.date}
              onChange={handleInputChange}
              className="bg-gray-900 text-white py-2 px-4 rounded mb-2"
            />
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded"
              onClick={handleAddEvent}
            >
              Save Event
            </button>
          </div>
        )}

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay" // will normally be on the right. if RTL, will be on the left
          }}
          height={"80vh"} // Adjust calendar height
          events={events} // Pass events data
          eventClick={handleEventClick} // Handle event click
        />

        {selectedEvent && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">{selectedEvent.title}</h2>
              <p className="mb-2">Details: {selectedEvent.extendedProps.details}</p>
              <p>Date: {selectedEvent.start.toLocaleDateString()}</p>
              <button className="bg-gray-900 text-white py-2 px-4 rounded mt-4" onClick={handleCloseEventDetails}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
