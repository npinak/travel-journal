import React from "react"
import odisha from "../assets/odisha.jpg"
import location_pin from "../assets/location-pin.png"


// Have to align text so that it is a bit higher and does not pass the picture
// Add another card
// Add bottom border to each card

export default function Card(props){
    return(
        <div className="card">
            <div className="left-side">
                <img src={props.item.imageUrl} />
            </div>
            <div className="right-side">
                <div className="location">
                    <img src={location_pin} className="location-pin"/>
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>Google Maps Link</a>
                </div>
                <div className="description">
                    <h2>{props.item.title}</h2>
                    <h5>{props.item.startDate} - {props.item.endDate}</h5>
                    <p>
                        {props.item.description}
                    </p>
                </div>
            </div>
        </div>
        
    )
}
