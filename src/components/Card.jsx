import React from 'react'
import data from '../data'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={`../images/${props.item.imageUrl}`} alt="" />
        <div className="cardInfo">
            <div className="location">
                <img src="../images/map.svg" alt="" />
                <p>{props.item.location}</p>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2>{props.item.title}</h2>
            <div className="date">
                <h6>{props.item.startDate}</h6>
                <h6> - </h6>
                <h6>{props.item.endDate}</h6>
            </div>
            <p>{props.item.description}</p>
        </div>
    </div>
  )
}

export default Card