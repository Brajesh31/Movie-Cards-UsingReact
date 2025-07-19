import React from "react";
import "./index.css"

function Card(props) {
    return (
        <>
            <div style={{ width: '500px', height: '590px', color: 'black', backgroundColor: 'white' }} className="card">
                <img style={{ width: '100%', height: '300px' }} src={props.img} alt="Movie Poster" />
                <h2 style={{ padding: '0 10px' }}>{props.title}</h2>
                <h4 style={{ color: 'grey',padding:'0 10px' }}>{props.title}</h4>
                <p style={{ padding: '0 10px' }}>{props.about}</p>
                <p style={{ padding: '0 10px',backgroundColor:'darkgray' }}>Rating: {props.rating}/10</p>
            </div>
        </>
    )
}

export default Card;