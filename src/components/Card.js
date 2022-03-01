import React, {Component} from "react"
import location from '../images/Fill 219.png'


export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.item.imgUrl} alt="card image"/>
            <div className="cardInfo">
                <h4 className="location"><img src={location}/>{props.item.location} <a href={props.item.googleMapsUrl}>View on google maps</a></h4>
                <h2 className="card--title">{props.item.title}</h2>
                <h6 className="card--date">{props.item.startDate} - {props.item.endDate}</h6>
                <h5 className="card--description">{props.item.description}</h5>
            </div>
        </div>
    )
}