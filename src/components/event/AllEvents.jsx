import React from 'react';
import Card from "./Card";

/**
 * Component that displays a grid of event cards
 * Renders filtered events based on the provided prop data
 * 
 * @param {Object} props - Component props
 * @param {Array} props.prop - Array of event objects to display
 */
const AllEvents = ({ prop }) => {
  return (
    <div>
      {/* Grid layout for event cards */}
      <div
        className="grid grid-cols-4"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {/* Map through events and render a Card for each one */}
        {prop.map((data) => (
          <Card 
            key={data.id}
            image={data.image}
            title={data.title}
            desc={data.desc}
            date={data.date}
            location={data.location}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;