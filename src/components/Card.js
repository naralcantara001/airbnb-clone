import React from 'react'

export default function Card(props) {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
      <div className='item-container'>
          {badgeText && <div className="badge">{badgeText}</div>}
        <img src={props.coverImg} alt='images'/>
        <div className='rating-container'>
          <span>
            <img src='images/star.png' alt='images'/>
            <span className='rating'>{props.rating}</span>
            <span className='reviewCount'>({props.reviewCount})</span>
            <span className='location'>• {props.location}</span>
          </span>
          <p className='title'>{props.title}</p>
          <p><b>From ${props.price} /</b> person</p>
        </div>
      </div>
  )
}
