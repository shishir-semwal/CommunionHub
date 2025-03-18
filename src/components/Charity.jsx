import React from 'react'

const Charity = () => {
  const filterCharity = EventsList.filter((data) => data.category === "Charity");
  const filterReligious = EventsList.filter((data) => data.category === "Charity");
  return (
    <div>
       <div
        className="grid grid-cols-4"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {filterData.map((data)=>(
          <Card image={data.image}
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

export default Charity