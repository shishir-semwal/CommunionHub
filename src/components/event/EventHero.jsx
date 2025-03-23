import React, { useState, useEffect } from "react";
import EventsList from "../../data/EventsList.json";
import AllEvents from "./AllEvents";
import EventFilters from "./EventFilters";

/**
 * Main component for displaying and filtering events
 * Handles event state, filtering, adding events, and persistence
 */
const EventHero = () => {
  /**
   * Helper function to parse different date formats
   * 
   * @param {string} dateStr - Date string in various formats
   * @returns {Date} - JavaScript Date object
   */
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

  // Load events from localStorage if available, otherwise use EventsList
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : EventsList;
  });

  // Filter state
  const [religious, setReligious] = useState(false);
  const [charity, setCharity] = useState(false);
  const [social, setSocial] = useState(false);
  
  // Filtered data state
  const [filterData, setFilterData] = useState(() => {
    // Sort events by date when initializing
    const sortedEvents = [...events].sort((a, b) => {
      return parseEventDate(a.date) - parseEventDate(b.date);
    });
    return sortedEvents;
  });

  /**
   * Filter events by category
   * 
   * @param {string} category - Category to filter by
   * @returns {Array} - Filtered and sorted events
   */
  const getFilteredEvents = (category) => {
    return events
      .filter((data) => data.category === category)
      .sort((a, b) => parseEventDate(a.date) - parseEventDate(b.date));
  };

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  /**
   * Add a new event to the list
   * 
   * @param {Object} newEvent - New event details
   */
  const addEvent = (newEvent) => {
    const eventDetail = {
      id: Date.now(), // Use timestamp for unique ID
      title: newEvent.evtName,
      desc: newEvent.evtDesc,
      location: newEvent.evtLocation,
      category: newEvent.evtCateg,
      date: newEvent.evtDate,
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

  /**
   * Reset events to default from EventsList
   */
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

  /**
   * Handle category filter button clicks
   * 
   * @param {string} category - Selected category
   */
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
      {/* Page header */}
      <center className="text-4xl pb-10">
        <h1 className="text-2xl md:text-4xl">Where Communities Thrive • Discover Events</h1>
      </center>
      
      {/* Event filters and controls */}
      <EventFilters 
        religious={religious}
        charity={charity}
        social={social}
        handleClick={handleClick}
        onAddEvent={addEvent}
        resetEvents={resetEvents}
      />

      {/* Event list or empty state message */}
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