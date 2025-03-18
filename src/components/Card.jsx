import React from 'react'

const Card = ({image,title,date,desc,location}) => {
  return (
    <div>
       <div className="card bg-base-100 w-98 shadow-sm ">
          <figure className="px-10 pt-10 h-64 w-144 object-cover">
            <img
              src={image}
              alt={title}
              className="rounded-xl w-full h-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>
              {desc}
            </p>
            <p>
              {date} {location}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Card