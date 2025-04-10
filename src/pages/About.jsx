import React from 'react'
import Faq from '../components/about/Faq';
import {Link} from 'react-router-dom';

/**
 * About page component
 * Provides information about the platform and FAQ section
 */
const About = () => {
  return (
    <section className="py-24 relative mt-10">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          {/* About information section */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-white text-4xl font-bold font-poppins leading-normal lg:text-start text-center">
                A vibrant platform for connecting diverse faiths and communities!
              </h2>
              <p className="text-[#9ea2a8] text-base font-normal leading-relaxed lg:text-start text-center">
                Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, 
                we foster inclusivity, collaboration, and social cohesion for a better world.
              </p>
            </div>
            {/* CTA Button */}
            <button className="btn btn-info">
              <span className="px-1.5 text-sm font-medium leading-6">
                <Link to="/event">Explore Events</Link>
              </span>
            </button>
          </div>
         
          {/* FAQ section */}
          <Faq/>
        </div>
      </div>
    </section>
  )
}

export default About