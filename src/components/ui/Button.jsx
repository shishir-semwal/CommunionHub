import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button component for various UI actions
 * Supports different variants and can be used as a link with React Router
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button style (default, primary, info, error)
 * @param {boolean} props.isSelected - Whether the button is in selected state
 * @param {string} props.to - Optional path for React Router link
 * @param {Function} props.onClick - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({ 
  variant = 'default', 
  isSelected = false, 
  to, 
  onClick, 
  children, 
  className = '' 
}) => {
  // Base button classes
  let buttonClasses = `btn btn-${variant}`;
  
  // Add selected state if needed
  if (isSelected) {
    buttonClasses += ' selected-btn';
  }
  
  // Add any additional classes
  if (className) {
    buttonClasses += ` ${className}`;
  }
  
  // If 'to' prop exists, render as Link component
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as regular button
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;