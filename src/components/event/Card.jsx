import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

/**
 * Card component for displaying event information
 * Includes animation effects and hover interactions
 * 
 * @param {Object} props - Component props
 * @param {string} props.image - URL of the event image
 * @param {string} props.title - Event title
 * @param {string} props.date - Event date string
 * @param {string} props.desc - Event description
 * @param {string} props.location - Event location
 * @param {string} props.category - Event category (optional)
 */
const Card = ({image, title, date, desc, location, category}) => {
  // Truncate description to 100 characters
  const truncatedDesc = desc.length > 100 ? desc.substring(0, 100) + '...' : desc;
  
  return (
    <div className="p-4">
      <motion.div 
        className="card bg-base-100 w-full h-full shadow-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          y: -5, 
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.2 }
        }}
      >
        {/* Event image with animation */}
        <figure className="px-6 pt-6 h-52 relative">
          <motion.img
            src={image}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </figure>
        
        {/* Card content */}
        <div className="card-body items-center text-center">
          {/* Event title */}
          <h2 className="card-title font-bold">{title}</h2>
          
          {/* Truncated description */}
          <p className="text-sm text-gray-600 mb-3 h-12 overflow-hidden">
            {truncatedDesc}
          </p>
          
          {/* Event details with icons */}
          <div className="flex flex-col w-full text-sm text-gray-500">
            {/* Date information */}
            <div className="flex items-center justify-center gap-1 mb-1">
              <FaCalendarAlt className="text-blue-500" />
              <span>{date}</span>
            </div>
            
            {/* Location information */}
            <div className="flex items-center justify-center gap-1">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="truncate max-w-52">{location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;