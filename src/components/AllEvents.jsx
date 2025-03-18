import React, { useState } from 'react'
import Card from "./Card";



const AllEvents = ({prop}) => {
 
  return (
    <div>
            <div
        className="grid grid-cols-4"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {
        
        prop.map((data)=>(
          <Card key={data.id}
          image={data.image}
          title={data.title}
          desc={data.desc}
          date={data.date}
          location={data.location}/>
        )

        )}
       
      </div>
    </div>
  )
}

export default AllEvents