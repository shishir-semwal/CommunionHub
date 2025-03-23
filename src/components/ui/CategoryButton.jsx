import React from 'react';

/**
 * Component for filtering events by category
 * Displays buttons for each category and handles selection state
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.religious - Whether religious category is selected
 * @param {boolean} props.charity - Whether charity category is selected
 * @param {boolean} props.social - Whether social category is selected
 * @param {Function} props.handleClick - Function to handle category selection
 */
const CategoryButtons = ({ religious, charity, social, handleClick }) => {
  return (
    <div className="mb-8">
      {/* Category label */}
      <p className="inline text-lg pr-8">Category: </p>
      
      {/* All categories button */}
      <button
        onClick={() => handleClick('all')}
        className={`btn btn-soft ${
          !religious && !charity && !social ? "btn-primary selected-btn" : "btn-info"
        } mr-8`}
      >
        All
      </button>

      {/* Religious category button */}
      <button
        onClick={() => handleClick('religious')}
        className={`btn btn-soft ${
          religious ? "btn-primary selected-btn" : "btn-info"
        }`}
      >
        Religious
      </button>

      {/* Social category button */}
      <button
        onClick={() => handleClick('social')}
        className={`btn btn-soft ml-8 mr-8 ${
          social ? "btn-primary selected-btn" : "btn-info"
        }`}
      >
        Social
      </button>

      {/* Charity category button */}
      <button
        onClick={() => handleClick('charity')}
        className={`btn btn-soft mr-8 ${
          charity ? "btn-primary selected-btn" : "btn-info"
        }`}
      >
        Charity
      </button>
    </div>
  );
};

export default CategoryButtons;