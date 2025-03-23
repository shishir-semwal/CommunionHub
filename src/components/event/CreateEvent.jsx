import React, { useRef } from 'react';

/**
 * Form component for creating new events
 * Uses refs to capture form input values
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onAddEvent - Callback function to handle form submission
 */
const CreateEventForm = ({ onAddEvent }) => {
  // Create refs for form elements
  const evtNameElement = useRef();
  const evtDateElement = useRef();
  const evtDescElement = useRef();
  const evtCategElement = useRef();
  const evtLocationElement = useRef();

  /**
   * Handle form submission
   * Creates a new event object from form values
   * 
   * @param {Event} event - Form submit event
   */
  let handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Create new event object from form values
    const newEvent = {
      evtName: evtNameElement.current.value,
      evtDesc: evtDescElement.current.value,
      evtDate: evtDateElement.current.value,
      evtCateg: evtCategElement.current.value,
      evtLocation: evtLocationElement.current.value
    };

    // Call parent handler with new event data
    onAddEvent(newEvent);
    
    // Close the modal
    const modalToggle = document.getElementById('my-modal-3');
    if (modalToggle) modalToggle.checked = false;

    // Reset the form
    event.target.reset();
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md mt-8 mb-2" 
         style={{
           animation: 'fadeIn 0.5s ease forwards',
         }}>
      {/* Form title */}
      <h2 className="text-2xl font-semibold text-white mb-6">Add Upcoming Event</h2>
      
      {/* Event creation form */}
      <form onSubmit={handleSubmit}>
        {/* Event name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Event name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            ref={evtNameElement}
            placeholder="What is the Event?" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        
        {/* Event location field */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-300 text-sm font-bold mb-2">Event location</label>
          <input 
            type="text" 
            id="location" 
            ref={evtLocationElement}
            name="location" 
            placeholder="Location" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        
        {/* Event category selection */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-300 text-sm font-bold mb-2">Event category</label>
          <select 
            type="radio" 
            id="category" 
            name="category" 
            ref={evtCategElement}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          >
            <option value="" disabled>Select a category</option>
            <option value="Religious">Religious</option>
            <option value=" Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>
        
        {/* Event date field */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-300 text-sm font-bold mb-2">Event date</label>
          <input 
            type="date" 
            ref={evtDateElement}
            id="date" 
            name="date" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        
        {/* Event description field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Event description</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            ref={evtDescElement}
            placeholder="Enter the description" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        
        {/* Submit button */}
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Add Event
        </button>
      </form>
      
      {/* CSS animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CreateEventForm;