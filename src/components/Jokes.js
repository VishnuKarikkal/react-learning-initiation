import React from 'react';

function Jokes(props)
{
    return(
        <div className="jokes">
            <h4 style={{display:!props.question && "none"}}>Question:<br></br>{props.question}</h4>
            <h5 style={{color:!props.question && "yellow"}}>Answer: {props.ans}</h5>
        </div>
    );
}

export default Jokes;