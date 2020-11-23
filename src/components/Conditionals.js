import React from 'react';

export default function Conditionals(props) {
    return (
        <div>
            {console.log(props.isLoading)}
            <h1>{props.isLoading?"Loading":"Loaded"}</h1>
        </div>
    )
}
