import React from 'react'
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <div className=''><div className="hero bg-base-200 min-h-screen">
      
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src=""
        className="max-w-96 rounded-lg shadow-2xl" />
        <img
        src="https://media.istockphoto.com/id/2165741143/photo/scenic-views-of-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=hHrNLvs_QUpGjkrYmDGs9V-smxl82MjJydFvlo_1SDY="
        className="max-w-96 rounded-lg shadow-2xl" />
        <img
        src="https://images.unsplash.com/photo-1529485726363-95c8d62f656f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHJlbGlnaW9ufGVufDB8fDB8fHww"
        className="max-w-96 rounded-lg shadow-2xl" />
      <div className=''>
        
        <h1 className="text-5xl">
          Connecting People Across Faiths & Interests</h1>
        <p className="py-6 text-[#9ea2a8]">
        Bridging gaps between faiths with tech and a dash of fun!
        </p>
        <Link to="/event"> <button className="btn  bg-[#048cf4]">Explore Events</button></Link>
       
      </div>
    </div>
  </div></div>
  )
}

export default Hero