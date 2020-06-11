import React from 'react';
import './App.css'
function Message(props) {
    
    let colorStyle = {
        color: props.textColor == "white" ? "white" : "silver"
    }
    return(
        <div>
            <h3 style={colorStyle}>background color has change to {props.backgroundColor}</h3>
            <h4 style={colorStyle}>Text color has been change to {props.textColor}</h4>
        </div>
    )
}

export default Message;