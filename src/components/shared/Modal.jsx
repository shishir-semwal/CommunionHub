import React from 'react'
import CreateEvent from "../event/CreateEvent.jsx";
import { RxCross2 } from "react-icons/rx";

/**
 * Modal component for displaying the event creation form
 * Provides a dialog that overlays the main content
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onAddEvent - Function to handle adding a new event
 */
const Modal = ({onAddEvent}) => {
  // Function to close modal after adding event
  const handleAddEvent = (newEvent) => {
    // Pass the new event to parent component
    onAddEvent(newEvent);
    
    // Close the modal
    document.getElementById('my_modal_3').close();
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button 
        onClick={() => {
          const modal = document.getElementById('my_modal_3');
          if (modal) modal.showModal();
        }}
        className="selected-btn btn-info"
      >
        Add Event
      </button>
      
      {/* Modal dialog */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close button in the top right */}
          <form method="dialog">
            <button className="btn text-white btn-circle btn-ghost absolute right-2 top-2">
              <RxCross2 />
            </button>
          </form>
          
          {/* Event creation form component */}
          <CreateEvent onAddEvent={handleAddEvent} />
        </div>
        
        {/* Modal backdrop - clicking it closes the modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Modal