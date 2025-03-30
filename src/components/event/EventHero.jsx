import React, { useState, useEffect } from "react";
import EventsList from "../../data/EventsList.json";
import AllEvents from "./AllEvents";
import Modal from "../shared/Modal.jsx";

// Helper function to parse different date formats
const parseEventDate = (dateStr) => {
  // Handle date strings like "17 March" or "30 March"
  if (typeof dateStr === 'string' && dateStr.includes(' ')) {
    const [day, month] = dateStr.split(' ');
    const months = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    
    // Create a date object for the current year
    const date = new Date();
    date.setMonth(months[month] || 0);
    date.setDate(parseInt(day) || 1);
    return date;
  }
  
  // Handle date-picker format (YYYY-MM-DD)
  else if (typeof dateStr === 'string' && dateStr.includes('-')) {
    return new Date(dateStr);
  }
  
  // Default case
  return new Date();
};

// Function to format a date string to "DD Month" format
const formatDate = (dateString) => {
  // For date picker format (YYYY-MM-DD)
  if (dateString.includes('-')) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  }
  // Return as is if already in the right format
  return dateString;
};

const EventHero = () => {
  // Load events from localStorage if available, otherwise use EventsList
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : EventsList;
  });

  const [religious, setReligious] = useState(false);
  const [charity, setCharity] = useState(false);
  const [social, setSocial] = useState(false);
  const [filterData, setFilterData] = useState(() => {
    // Sort events by date when initializing
    const sortedEvents = [...events].sort((a, b) => {
      return parseEventDate(a.date) - parseEventDate(b.date);
    });
    return sortedEvents;
  });

  // Filter based on current events state instead of EventsList
  const getFilteredEvents = (category) => {
    return events
      .filter((data) => data.category === category)
      .sort((a, b) => parseEventDate(a.date) - parseEventDate(b.date));
  };

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    const eventDetail = {
      id: Date.now(), // Use timestamp for unique ID
      title: newEvent.evtName,
      desc: newEvent.evtDesc,
      location: newEvent.evtLocation,
      category: newEvent.evtCateg,
      date: formatDate(newEvent.evtDate), // Format the date here
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwZmluZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    };

    const updatedEvts = [...events, eventDetail];
    // Sort the updated events by date
    const sortedEvents = [...updatedEvts].sort((a, b) => {
      return parseEventDate(a.date) - parseEventDate(b.date);
    });
    
    setEvents(sortedEvents);

    // Update filtered data if "All" category is selected or if the new event matches the current filter
    if (!religious && !charity && !social) {
      setFilterData(sortedEvents);
    } else if (
      (religious && newEvent.evtCateg === "Religious") ||
      (charity && newEvent.evtCateg === "Charity") ||
      (social && newEvent.evtCateg === "Social")
    ) {
      // Add the new event to the filtered data and sort
      const updatedFilterData = [...filterData, eventDetail].sort(
        (a, b) => parseEventDate(a.date) - parseEventDate(b.date)
      );
      setFilterData(updatedFilterData);
    }
  };

  const resetEvents = () => {
    localStorage.removeItem("events");
    // Sort the default events when resetting
    const sortedDefaultEvents = [...EventsList].sort(
      (a, b) => parseEventDate(a.date) - parseEventDate(b.date)
    );
    setEvents(sortedDefaultEvents);
    setFilterData(sortedDefaultEvents);
    setReligious(false);
    setCharity(false);
    setSocial(false);
  };

  const handleClick = (category) => {
    if (category === "all") {
      setReligious(false);
      setCharity(false);
      setSocial(false);
      // Sort all events by date
      const sortedEvents = [...events].sort(
        (a, b) => parseEventDate(a.date) - parseEventDate(b.date)
      );
      setFilterData(sortedEvents);
    } else if (category === "religious") {
      setReligious(true);
      setCharity(false);
      setSocial(false);
      setFilterData(getFilteredEvents("Religious"));
    } else if (category === "charity") {
      setReligious(false);
      setCharity(true);
      setSocial(false);
      setFilterData(getFilteredEvents("Charity"));
    } else if (category === "social") {
      setReligious(false);
      setCharity(false);
      setSocial(true);
      setFilterData(getFilteredEvents("Social"));
    }
  };

  return (
    <div className="pt-32">
      <center className="text-4xl pb-10">
       <h1 className="text-2xl md:text-4xl">Where Communities Thrive • Discover Events</h1>
      </center>
      
      {/* Desktop view - unchanged from original */}
      <div className="hidden md:block">
        <center>
          <div className="mb-8">
            <p className="inline text-lg pr-8">Category: </p>
            <button
              onClick={() => handleClick('all')}
              className={`btn btn-soft ${
                !religious && !charity && !social ? "btn-primary selected-btn" : "btn-info"
              } mr-8`}
            >
              All
            </button>

            <button
              onClick={() => handleClick('religious')}
              className={`btn btn-soft ${
                religious ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              Religious
            </button>

            <button
              onClick={() => handleClick('social')}
              className={`btn btn-soft ml-8 mr-8 ${
                social ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              Social
            </button>

            <button
              onClick={() => handleClick('charity')}
              className={`btn btn-soft mr-8 ${
                charity ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              Charity
            </button>
            <p className="inline text-lg pr-8 pl-64">Add new event: </p>
            <span className="btn btn-info">
              <Modal onAddEvent={addEvent} />
            </span>
            <button onClick={resetEvents} className="btn btn-error ml-4">
              Reset
            </button>
          </div>
        </center>
      </div>
      
      {/* Mobile view - centered controls */}
      <div className="block md:hidden px-4">
        <div className="text-center mb-6">
          <p className="text-lg mb-3">Category: </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => handleClick('all')}
              className={`btn btn-soft ${
                !religious && !charity && !social ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              All
            </button>

            <button
              onClick={() => handleClick('religious')}
              className={`btn btn-soft ${
                religious ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              Religious
            </button>

            <button
              onClick={() => handleClick('social')}
              className={`btn btn-soft ${
                social ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              Social
            </button>

            <button
              onClick={() => handleClick('charity')}
              className={`btn btn-soft ${
                charity ? "btn-primary selected-btn" : "btn-info"
              }`}
            >
              Charity
            </button>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-lg mb-3">Add new event: </p>
          <div className="flex justify-center gap-3">
            <span className="btn btn-info">
              <Modal onAddEvent={addEvent} />
            </span>
            <button onClick={resetEvents} className="btn btn-error">
              Reset
            </button>
          </div>
        </div>
      </div>

      {filterData.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">
            No events found in this category
          </h3>
          <p className="text-gray-500">
            Try selecting a different category or add a new event
          </p>
        </div>
      ) : (
        <AllEvents prop={filterData} />
      )}
    </div>
  );
};

export default EventHero;