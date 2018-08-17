import React from 'react';

export default function House(props){
    return(
        <div>
            
            <p>{props.id}</p>
            <p>{props.price}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.address}</p>
            <p>{props.zip}</p>

            <button>Delete</button>
        </div>
    )
}