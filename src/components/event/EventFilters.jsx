import React from 'react';
import Modal from '../shared/Modal';

/**
 * Component for event filtering and control actions
 * Displays category filters, add event button, and reset button
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.religious - Whether religious filter is active
 * @param {boolean} props.charity - Whether charity filter is active
 * @param {boolean} props.social - Whether social filter is active
 * @param {Function} props.handleClick - Handler for filter button clicks
 * @param {Function} props.onAddEvent - Handler for adding a new event
 * @param {Function} props.resetEvents - Handler for resetting events to default
 */
const EventFilters = ({ 
  religious, 
  charity, 
  social, 
  handleClick, 
  onAddEvent, 
  resetEvents 
}) => {
  return (
    <>
      {/* Desktop view - full width controls */}
      <div className="hidden md:block">
        <center>
          <div className="mb-8">
            {/* Category filter section */}
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
            
            {/* Add event and reset section */}
            <p className="inline text-lg pr-8 pl-64">Add new event: </p>
            <span className="btn btn-info">
              <Modal onAddEvent={onAddEvent} />
            </span>
            <button onClick={resetEvents} className="btn btn-error ml-4">
              Reset
            </button>
          </div>
        </center>
      </div>
      
      {/* Mobile view - stacked controls */}
      <div className="block md:hidden px-4">
        {/* Category filter section - mobile */}
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
        
        {/* Add event and reset section - mobile */}
        <div className="text-center mb-6">
          <p className="text-lg mb-3">Add new event: </p>
          <div className="flex justify-center gap-3">
            <span className="btn btn-info">
              <Modal onAddEvent={onAddEvent} />
            </span>
            <button onClick={resetEvents} className="btn btn-error">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventFilters;