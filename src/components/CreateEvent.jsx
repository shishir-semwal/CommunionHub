import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md mt-10 mb-10" 
         style={{
           animation: 'fadeIn 0.5s ease forwards',
         }}>
      <h2 className="text-2xl font-semibold text-white mb-6">Add Upcoming Event</h2>
      <form action="https://fabform.io/f/insert-form-id" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Event name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Event location</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Event category</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-300 text-sm font-bold mb-2">Event date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            placeholder="john@example.com" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Event description</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="How can we help you?" 
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Add Event
        </button>
        
      </form>
      
      {/* Add the keyframes animation to the component */}
      <style jsx>{`
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

export default ContactForm;