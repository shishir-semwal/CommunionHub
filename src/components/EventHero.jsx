import React, { useState } from 'react'
import EventsList from "../EventsList.json";
import AllEvents from "./AllEvents";
import CreateEvent from './CreateEvent.jsx'
const EventHero = () => {
  const [religious,setReligious]=useState(false);
  const [charity,setCharity]=useState(false);
  const [social,setSocial]=useState(false);
  const [filterData,setFilterData]=useState(EventsList);


  const filterReligious = EventsList.filter((data) => data.category === "Religious");
  const filterCharity = EventsList.filter((data) => data.category === "Charity");
  const filterSocial=EventsList.filter((data) => data.category === "Social");
  
  let handleClick=(category)=>{
if(category==='religious'){
  setReligious(true);
  setCharity(false);
  setSocial(false);
  setFilterData(filterReligious);

}else if(category==='charity'){
  setReligious(false);
  setCharity(true);
  setSocial(false);
setFilterData(filterCharity);
}
else if(category==='social'){
  setReligious(false);
  setCharity(false);
  setSocial(true);
 setFilterData(filterSocial)
}

  };
  return (

    <div className="pt-32">
      
      
      <center className="text-4xl pb-10">
        <h1>Where Communities Thrive • Discover Events</h1>
      </center>
      <center>
        <div>
          <p className="inline text-lg pr-8">  Category: </p>
          <button onClick={()=>handleClick('religious')} className="btn  btn-soft  btn-info">Religious</button>
          <button onClick={()=>handleClick('social')} className="btn   btn-soft  btn-info ml-8 mr-8">Social</button>
          <button onClick={()=>handleClick('charity')} className="btn  btn-soft  btn-info">Charity</button>
        </div>
      </center>
      
        
        
     <AllEvents prop={filterData}/>
     {/* <CreateEvent/> */}

    </div>
  );
};

export default EventHero;
