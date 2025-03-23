import React from 'react'
import EventHero from '../components/event/EventHero.jsx'

/**
 * Event page component
 * Displays all events and provides filtering functionality
 */
const Event = () => {
  return (
    <div>
      {/* Event hero section with event listings and filters */}
      <EventHero/>
    </div>
  )
}

export default Event